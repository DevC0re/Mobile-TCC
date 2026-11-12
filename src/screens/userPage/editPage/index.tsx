import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Main } from "./style";
import { Header } from "../../../components/header";
import { NavBar } from "../../../components/navBar";
import { EditProfilePhoto } from "../../../components/EditProfilePhoto";
import { FormEdit } from "../../../components/formEditPage";
import { Button } from "../../../components/button";
import { theme } from "../../../style/theme";
import { useAuth } from "../../../features/auth/AuthContext";
import { getApiErrorMessage } from "../../../services/apiError";

export const EditPage = () => {
  const { user, photoUri, changeProfilePhoto, removeProfilePhoto, updateName } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [saving, setSaving] = useState(false);
  const [changingPhoto, setChangingPhoto] = useState(false);
  const [password, setPassword] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const save = async () => {
    if (!name.trim()) return Alert.alert("Dados incompletos", "Digite seu nome.");
    if (password.length < 8 || password.length > 16) {
      return Alert.alert("Senha obrigatória", "Digite a senha que deseja manter ou definir (8 a 16 caracteres). O servidor redefine a senha nesta operação.");
    }
    setSaving(true);
    try {
      await updateName(name.trim(), password);
      setPassword("");
      Alert.alert("Perfil atualizado", "Seu nome foi salvo com sucesso.");
    } catch (error) {
      Alert.alert("Erro ao atualizar", getApiErrorMessage(error));
    } finally { setSaving(false); }
  };

  const pickPhoto = async (source: "gallery" | "camera") => {
    if (changingPhoto) return;
    setChangingPhoto(true);
    try {
      if (source === "camera") {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
          Alert.alert("Permissão necessária", "Permita o acesso à câmera nas configurações do celular.");
          return;
        }
      }
      const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      };
      const result = source === "gallery"
        ? await ImagePicker.launchImageLibraryAsync(options)
        : await ImagePicker.launchCameraAsync(options);
      if (result.canceled || !result.assets?.[0]?.uri) return;
      const asset = result.assets[0];
      await changeProfilePhoto(asset.uri, asset.mimeType, asset.fileSize);
      Alert.alert("Foto alterada", "Sua foto foi salva neste dispositivo.");
    } catch (error) {
      Alert.alert("Não foi possível alterar a foto", error instanceof Error ? error.message : "Tente novamente.");
    } finally {
      setChangingPhoto(false);
    }
  };

  const openPhotoOptions = () => {
    if (changingPhoto) return;
    if (Platform.OS === "web") {
      void pickPhoto("gallery");
      return;
    }
    Alert.alert("Foto de perfil", "Como deseja alterar sua foto?", [
      { text: "Galeria", onPress: () => { void pickPhoto("gallery"); } },
      { text: "Câmera", onPress: () => { void pickPhoto("camera"); } },
      { text: "Cancelar", style: "cancel" },
    ]);
  };

  const confirmRemovePhoto = () => {
    if (Platform.OS === "web") {
      void removeProfilePhoto();
      return;
    }
    Alert.alert(
    "Remover foto?", "A foto será removida do seu perfil neste dispositivo.", [
      { text: "Cancelar", style: "cancel" },
      { text: "Remover", style: "destructive", onPress: async () => {
        try { await removeProfilePhoto(); }
        catch { Alert.alert("Erro", "Não foi possível remover sua foto."); }
      } },
    ],
    );
  };

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const hide = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
    return () => { show.remove(); hide.remove(); };
  }, []);

  return (
    <Main>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.skyBlue }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header title="Editar perfil" />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1, padding: 20, paddingBottom: 30, gap: 20,
            justifyContent: keyboardVisible ? "flex-start" : "space-between",
          }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <EditProfilePhoto image={photoUri} onPress={openPhotoOptions} disabled={changingPhoto} />
          {photoUri && (
            <Pressable
              onPress={confirmRemovePhoto}
              disabled={changingPhoto}
              accessibilityRole="button"
              accessibilityLabel="Remover foto do perfil"
              style={{ alignSelf: "center", padding: 8 }}
            >
              <Text style={{ color: theme.colors.redSurface, textDecorationLine: "underline" }}>
                Remover foto
              </Text>
            </Pressable>
          )}

          <FormEdit name={name} email={user?.email ?? ""} onChangeName={setName} password={password} onChangePassword={setPassword} />
          <Button title={saving ? "Salvando..." : "Salvar alterações"} disabled={saving} onPress={save} />
        </ScrollView>
        {!keyboardVisible && <NavBar activeUserPage={true} />}
      </KeyboardAvoidingView>
    </Main>
  );
};
