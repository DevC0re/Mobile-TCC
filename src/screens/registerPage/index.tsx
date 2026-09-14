import { View } from "react-native";
import { ButtonAuth } from "../../components/auth/authButton";
import { Headerauth } from "../../components/auth/authheader";
import { Input } from "../../components/auth/authInput";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import {
	ButtonSection,
	Conteiner, ContentWrapper,
	FormConteiner,
	Main,
	RegisterForm,
	TextHighlight,
	TextPrivacidade,
	Title,
} from "./style";
import { Scroll } from "../../style/global";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationType} from "../../types/navigationType";

type NavigationProps = NativeStackNavigationProp<NavigationType, 'Register'>;

export const RegisterPage = () => {
	const { isSmall, isTablet } = useBreakpoint();

	const navigation = useNavigation<NavigationProps>();

	const handleGoLoginPage= () =>{
		navigation.navigate("Login")
	}


	return (
		<Main>
			<Scroll>
				<Conteiner isSmall={isSmall} isTablet={isTablet}>
					<ContentWrapper>
						<Headerauth />

						<RegisterForm isSmall={isSmall}>
							<Title
								isSmall={isSmall}
								isTablet={isTablet}
								maxFontSizeMultiplier={1.5}
							>
								Registro
							</Title>

							<FormConteiner isTablet={isTablet}>
								<Input label={"Nome:"} textplace={"Digite o texto aqui"} />

								<Input
									label={"Email:"}
									textplace={"Digite o email"}
									autocapitalize={"none"}
								/>

								<Input
									label={"Senha:"}
									textplace={" Sua senha Deve conter 6 caracteres."}
									password
									autocapitalize={"none"}
								/>

								<Input
									label={"Confirme sua senha:"}
									textplace={"Confirme sua senha"}
									password
									autocapitalize={"none"}
								/>
							</FormConteiner>
						</RegisterForm>
					</ContentWrapper>


					<ButtonSection isTablet={isTablet}>
						<ButtonAuth text={"Criar nova conta"} />

						<View>
							<TextPrivacidade isSmall={isSmall}>
								Já tem uma conta??{" "}
								<TextHighlight onPress={handleGoLoginPage} isSmall={isSmall}>Entrar</TextHighlight>
							</TextPrivacidade>
							<TextPrivacidade isSmall={isSmall}>
								Ao continuar, você concorda com nossos{" "}
								<TextHighlight isSmall={isSmall}>
									Termos de Serviço
								</TextHighlight>{" "}
								e{" "}
								<TextHighlight isSmall={isSmall}>
									Política de Privacidade
								</TextHighlight>
								.
							</TextPrivacidade>
						</View>
					</ButtonSection>
				</Conteiner>
			</Scroll>
		</Main>
	);
};
