import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "medup.jwt";
const USER_ID_KEY = "medup.usuarioId";
// Na web os dados de autenticação ficam somente na memória da aba.
let webToken: string | null = null;
let webUserId: string | null = null;

export const getAuthToken = async () =>
  Platform.OS === "web" ? webToken : SecureStore.getItemAsync(TOKEN_KEY);

export const getUsuarioId = async () =>
  Platform.OS === "web" ? webUserId : SecureStore.getItemAsync(USER_ID_KEY);

export async function setAuthSession(token: string, userId: string) {
  if (Platform.OS === "web") {
    webToken = token;
    webUserId = userId;
  } else {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
    await SecureStore.setItemAsync(USER_ID_KEY, userId);
  }
}

export async function clearAuthToken() {
  if (Platform.OS === "web") {
    webToken = null;
    webUserId = null;
  } else {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(USER_ID_KEY);
  }
}
