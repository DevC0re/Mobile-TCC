import { View, Pressable } from "react-native";
import phototest from "../../assets/./testphoto.png";
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
	ButtonExit,
} from "./style";
import { SectionProfileOptions } from "../../components/sectionProfileOptions";
import { LogOut } from "lucide-react-native";
import { theme } from "../../style/theme";

export const UserPage = () => {
	return (
		<Main>
			<Header title={"Perfil"} />
			<Conteiner>
				<Carduser>
					<PhotoUser source={phototest} />
					<View>
						<UserName>João da silva</UserName>
					</View>
				</Carduser>
				<TextInfoContainer>
					<TextInfo>Minha conta</TextInfo>
				</TextInfoContainer>
				<SectionProfileOptions />
				<View>
					<ButtonExit>
						<LogOut color={theme.colors.redSurface} />
						<TextButton>Sair da conta</TextButton>
					</ButtonExit>
				</View>
			</Conteiner>
			<NavBar activeUserPage={true} />
		</Main>
	);
};
