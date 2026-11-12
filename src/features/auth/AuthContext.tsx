import React, { createContext, useContext, useEffect, useState } from "react";
import type { PerfilUsuarioDTO } from "../../types/apiTypes";
import { buscarMeuPerfil, login, sairDaConta, atualizarMeuPerfil } from "../../services/usuarioService";
import { getAuthToken } from "../../services/tokenStorage";
import {
  deleteLocalProfilePhoto,
  getLocalProfilePhoto,
  storeLocalProfilePhoto,
} from "../../services/profilePhotoStorage";

type AuthContextValue = {
  user: PerfilUsuarioDTO | null;
  photoUri: string | null;
  initializing: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateName: (name: string, password: string) => Promise<void>;
  changeProfilePhoto: (uri: string, mimeType?: string | null, fileSize?: number) => Promise<void>;
  removeProfilePhoto: () => Promise<void>;
};
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PerfilUsuarioDTO | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        if (await getAuthToken()) {
          const profile = await buscarMeuPerfil();
          const storedPhoto = getLocalProfilePhoto(profile.id);
          if (mounted) {
            setUser(profile);
            setPhotoUri(storedPhoto);
          }
        }
      } catch {
        // Falha de rede transitória não apaga o JWT nem a imagem persistida.
      } finally {
        if (mounted) setInitializing(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const signIn = async (email: string, senha: string) => {
    const profile = await login(email, senha);
    setPhotoUri(getLocalProfilePhoto(profile.id));
    setUser(profile);
  };
  const signOut = async () => {
    await sairDaConta();
    setUser(null);
    setPhotoUri(null);
  };
  const updateName = async (name: string, password: string) => {
    setUser(await atualizarMeuPerfil(name, password));
  };
  const changeProfilePhoto = async (uri: string, mimeType?: string | null, fileSize?: number) => {
    if (!user) throw new Error("Entre na sua conta para alterar a foto.");
    const savedUri = await storeLocalProfilePhoto(user.id, uri, mimeType, fileSize);
    setPhotoUri(savedUri);
  };
  const removeProfilePhoto = async () => {
    if (!user) throw new Error("Entre na sua conta para remover a foto.");
    deleteLocalProfilePhoto(user.id);
    setPhotoUri(null);
  };
  return (
    <AuthContext.Provider value={{
      user, photoUri, initializing, signIn, signOut, updateName,
      changeProfilePhoto, removeProfilePhoto,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser utilizado dentro de AuthProvider");
  return context;
}
