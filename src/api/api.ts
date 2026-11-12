import axios from "axios";
import { Platform } from "react-native";
import { getAuthToken } from "../services/tokenStorage";

// Para celular físico, configure EXPO_PUBLIC_API_URL com o IP do computador na rede.
// 10.0.2.2 funciona somente no emulador Android padrão.
const developmentUrl = Platform.OS === "android"
  ? "http://10.0.2.2:8080"
  : "http://localhost:8080";

export const api = axios.create({
  baseURL: (process.env.EXPO_PUBLIC_API_URL?.trim() || developmentUrl).replace(/\/$/, ""),
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  // Endpoints públicos não devem herdar um JWT antigo/inválido.
  const path = String(config.url ?? "");
  if (path === "/login" || path === "/usuario" || path.startsWith("/api/auth/")) return config;
  const token = await getAuthToken();
  if (token) config.headers.set("Authorization", `Bearer ${token}`);
  return config;
});
