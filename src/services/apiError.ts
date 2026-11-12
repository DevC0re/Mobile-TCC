import axios from "axios";

export function getApiErrorMessage(error: unknown, fallback = "Não foi possível conectar ao servidor."): string {
  if (!axios.isAxiosError(error)) return error instanceof Error ? error.message : fallback;
  if (!error.response) {
    return error.code === "ECONNABORTED"
      ? "A conexão com o servidor demorou demais."
      : "Servidor inacessível. Confira a URL da API e a conexão de rede.";
  }
  if (error.response.status === 401) return "E-mail ou senha incorretos, conta não confirmada ou sessão expirada.";
  if (error.response.status === 403) return "Você não tem permissão para realizar essa ação.";
  if (error.response.status === 409) return "Já existe um cadastro com esses dados.";
  const data: unknown = error.response.data;
  if (typeof data === "string" && data.length < 250 && !data.includes("<!DOCTYPE")) return data;
  if (data && typeof data === "object") {
    const message = (data as { message?: unknown; detail?: unknown }).message ?? (data as { detail?: unknown }).detail;
    if (typeof message === "string" && message.length < 250) return message;
  }
  return `${fallback} (HTTP ${error.response.status})`;
}
