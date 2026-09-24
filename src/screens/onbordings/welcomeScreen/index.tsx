import { Text, TouchableOpacity, View } from "react-native";
import { ButtonOnBordings } from "../../../components/buttonOnbordings";
import Logo from "../../../components/logo";
import {
	Conteiner,
	Main,
	Subtitle,
	Textconteiner,
	Title,
	WrapperText,
} from "./style";

export const Welcome = () => {
	return (
		<Main>
			<Conteiner>
				<Title>MedUp</Title>
				<Logo />
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
