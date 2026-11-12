import { api } from "../api/api";
import type { CadastroUsuarioDTO, PerfilUsuarioDTO } from "../types/apiTypes";
import { getUsuarioIdFromJwt } from "./jwtUsuario";
import { clearAuthToken, getAuthToken, getUsuarioId, setAuthSession } from "./tokenStorage";

export async function criarUsuario(user: CadastroUsuarioDTO): Promise<string> {
  const { data } = await api.post<string>("/usuario", user);
  return data;
}

export async function confirmarEmail(email: string, codigo: string): Promise<string> {
  const { data } = await api.post<string>("/api/auth/confirmar", { email, codigo });
  return data;
}

export async function reenviarCodigo(email: string): Promise<string> {
  const { data } = await api.post<string>("/api/auth/reenviar", { email });
  return data;
}

function formatarPerfil(data: PerfilUsuarioDTO): PerfilUsuarioDTO {
  // A entidade original do back-end devolve `roles`, não `role`.
  return { ...data, role: data.roles ?? data.role ?? "USER" };
}

export async function login(email: string, senha: string): Promise<PerfilUsuarioDTO> {
  const { data } = await api.post<string>("/login", { email, senha });
  // O controller responde com o token diretamente como texto.
  if (typeof data !== "string" || !data.trim()) throw new Error("Token inválido recebido da API.");
  const token = data.trim();
  const id = getUsuarioIdFromJwt(token);
  await setAuthSession(token, id);
  try {
    return await buscarMeuPerfil();
  } catch (error) {
    await clearAuthToken();
    throw error;
  }
}

export async function buscarMeuPerfil(): Promise<PerfilUsuarioDTO> {
  let id = await getUsuarioId();
  if (!id) {
    // Compatível com tokens gravados por versões anteriores do aplicativo.
    const token = await getAuthToken();
    if (!token) throw new Error("Faça login para visualizar o perfil.");
    id = getUsuarioIdFromJwt(token);
    await setAuthSession(token, id);
  }
  const { data } = await api.get<PerfilUsuarioDTO>(`/usuario/${id}`);
  return formatarPerfil(data);
}

export async function atualizarMeuPerfil(name: string, password: string): Promise<PerfilUsuarioDTO> {
  const id = await getUsuarioId();
  if (!id) throw new Error("Faça login para atualizar o perfil.");
  // O PUT original exige todos os campos de UserRequestDTO e altera a senha.
  // A senha é recebida da tela somente para esta operação; não é armazenada.
  const current = await buscarMeuPerfil();
  await api.put<string>(`/usuario/${id}`, {
    name,
    email: current.email,
    cpf: current.cpf ?? null,
    password,
  });
  return buscarMeuPerfil();
}

export const sairDaConta = clearAuthToken;
