import { View , Pressable } from "react-native";
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
	TextButton
} from "./style";
import { SectionProfileOptions } from "../../components/sectionProfileOptions";
import { LogOut } from "lucide-react-native";

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
					<Pressable>
						<LogOut/>
						<TextButton>
							Sair da conta
						</TextButton>
					</Pressable>
				</View>
			</Conteiner>
			<NavBar activeUserPage={true} />
		</Main>
	);
};
