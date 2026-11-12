import { Directory, File, Paths } from "expo-file-system";
import { Platform } from "react-native";

// O backend original não disponibiliza endpoint de upload de foto.
// Persistência local: a foto é exclusiva deste usuário e deste dispositivo.
function getPhotosDirectory() {
  return new Directory(Paths.document, "medup-profile-photos");
}
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

function assertValidUserId(userId: string) {
  if (!uuidPattern.test(userId)) throw new Error("Identificador de usuário inválido.");
}

function userPhotos(userId: string): File[] {
  const photosDirectory = getPhotosDirectory();
  if (!photosDirectory.exists) return [];
  return photosDirectory.list()
    .filter((entry): entry is File =>
      entry instanceof File && entry.name.startsWith(`${userId}-`),
    );
}

/** Lê uma imagem salva pelo aplicativo, sem depender de armazenamento de cache. */
export function getLocalProfilePhoto(userId: string): string | null {
  assertValidUserId(userId);
  if (Platform.OS === "web") return null;
  const images = userPhotos(userId);
  // Nome com timestamp permite atualizar o componente Image sem cache desatualizado.
  images.sort((a, b) => b.name.localeCompare(a.name));
  return images[0]?.uri ?? null;
}

/** Copia o resultado do ImagePicker para um diretório persistente do app. */
export async function storeLocalProfilePhoto(
  userId: string,
  pickedUri: string,
  mimeType?: string | null,
  pickedFileSize?: number,
): Promise<string> {
  assertValidUserId(userId);
  if (pickedFileSize && pickedFileSize > MAX_PHOTO_BYTES) {
    throw new Error("Escolha uma foto de até 5 MB.");
  }
  if (Platform.OS === "web") {
    // Na web, a imagem é temporária até recarregar a página.
    return pickedUri;
  }

  const source = new File(pickedUri);
  if (!source.exists) throw new Error("A imagem selecionada não está disponível.");
  if (source.size > MAX_PHOTO_BYTES) {
    throw new Error("Escolha uma foto de até 5 MB.");
  }

  const originalExtension = pickedUri.split(/[?#]/)[0]?.match(/\.(jpe?g|png|webp|heic|heif)$/i)?.[1]?.toLowerCase();
  const extension = mimeType === "image/png" ? "png"
    : mimeType === "image/webp" ? "webp"
    : mimeType === "image/heic" || mimeType === "image/heif" ? "heic"
    : mimeType === "image/jpeg" ? "jpg"
    : originalExtension ?? "jpg";

  const photosDirectory = getPhotosDirectory();
  photosDirectory.create({ idempotent: true, intermediates: true });
  const existing = userPhotos(userId);
  const filename = `${userId}-${Date.now().toString().padStart(13, "0")}.${extension}`;
  const destination = new File(photosDirectory, filename);
  await source.copy(destination);
  if (!destination.exists) throw new Error("Não foi possível salvar a imagem selecionada.");

  // Excluir fotos anteriores somente depois de a nova ter sido copiada.
  for (const photo of existing) {
    try { photo.delete(); } catch { /* A nova foto já foi salva. */ }
  }
  return destination.uri;
}

export function deleteLocalProfilePhoto(userId: string): void {
  assertValidUserId(userId);
  if (Platform.OS === "web") return;
  for (const photo of userPhotos(userId)) photo.delete();
}
