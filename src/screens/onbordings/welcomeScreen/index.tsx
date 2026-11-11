import { Text, TouchableOpacity, View } from "react-native";
import { ButtonOnBordings } from "../../../components/buttonOnbordings";
import {
	Conteiner,
	Main,
	Subtitle,
	Textconteiner,
	Title,
	WrapperText,
} from "./style";
import LogoMedup from "../../../components/logo";

export const Welcome = () => {
	return (
		<Main>
			<Conteiner>
				<Title>MedUp</Title>
				<LogoMedup />
				<WrapperText>
					<Subtitle>Bem-vindo ao MedUp!</Subtitle>
					<Textconteiner>
						Encontre hospitais próximos à sua localização e tenha acesso rápido
						às informações necessárias para escolher a melhor opção de
						atendimento.
					</Textconteiner>
				</WrapperText>

				<View>
					<ButtonOnBordings text={"Começar"} />
				</View>
			</Conteiner>
		</Main>
	);
};
