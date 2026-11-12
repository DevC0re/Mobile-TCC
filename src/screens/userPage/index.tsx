import { Alert, ScrollView, View } from "react-native";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import {
	Carduser,
	Conteiner,
	Main,
	PhotoUser,
	TextInfo,
	TextInfoContainer,
	UserName,
	TextButton,
	ButtonExit, PhotoPlaceholder,
} from "./style";
import { SectionProfileOptions } from "../../components/sectionProfileOptions";
import { LogOut, UserRound } from "lucide-react-native";
import { theme } from "../../style/theme";
import { useAuth } from "../../features/auth/AuthContext";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { NavigationType } from "../../types/navigationType";

export const UserPage = () => {
  const { user, photoUri, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const logout = async () => {
    try {
      await signOut();
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    } catch {
      Alert.alert("Erro", "Não foi possível encerrar sua sessão.");
    }
  };
	return (
		<Main>
			<Header title={"Perfil"} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Conteiner>
					<Carduser>
						{photoUri ? (
              <PhotoUser source={{ uri: photoUri }} />
            ) : (
              <PhotoPlaceholder><UserRound size={64} color={theme.colors.navy} /></PhotoPlaceholder>
            )}
						<View>
							<UserName>{user?.name ?? "Usuário"}</UserName>
						</View>
					</Carduser>
					<TextInfoContainer>
						<TextInfo>Minha conta</TextInfo>
					</TextInfoContainer>
					<SectionProfileOptions />
					<View>
						<ButtonExit onPress={logout}>
							<LogOut color={theme.colors.redSurface} />
							<TextButton>Sair da conta</TextButton>
						</ButtonExit>
					</View>
				</Conteiner>
			</ScrollView>

			<NavBar activeUserPage={true} />
		</Main>
	);
};
