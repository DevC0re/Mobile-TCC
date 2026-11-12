/**
 * Lê exclusivamente o UUID da claim `id` do JWT fornecido pela API.
 * Isto é apenas decodificação para navegação: a autenticação e a autorização
 * precisam continuar sendo verificadas pelo Spring Security no servidor.
 */
export function getUsuarioIdFromJwt(token: string): string {
  const payload = token.split(".")[1];
  if (!payload) throw new Error("Token de autenticação inválido.");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const normalized = payload.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, "");
  if (!/^[a-zA-Z0-9+/]+$/.test(normalized)) throw new Error("Token inválido.");
  let bits = 0;
  let buffer = 0;
  const bytes: number[] = [];
  for (const char of normalized) {
    buffer = (buffer << 6) | alphabet.indexOf(char);
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      bytes.push((buffer >> bits) & 255);
    }
  }
  const json = decodeURIComponent(bytes.map((byte) => `%${byte.toString(16).padStart(2, "0")}`).join(""));
  const data: unknown = JSON.parse(json);
  const id = data && typeof data === "object" && "id" in data ? data.id : undefined;
  if (typeof id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
    throw new Error("O token recebido não contém um UUID de usuário válido.");
  }
  return id;
}
