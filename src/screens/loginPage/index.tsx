import {
	ButtonSection,
	Conteiner,
	ForgotPasswordContainer,
	FormConteiner,
	LoginForm,
	Main,
	Title,
	TextHighlight,
	TextPrivacidade,
	ForgotPasswordLink,
	ContentWrapper,
} from "./style";
import { View } from "react-native";
import { Headerauth } from "../../components/auth/authheader";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Input } from "../../components/auth/authInput";
import { ButtonAuth } from "../../components/auth/authButton";
import { SsoButton } from "../../components/auth/ssoButton";
import { Scroll } from "../../style/global";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationType} from "../../types/navigationType";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

type NavigationProps = NativeStackNavigationProp<NavigationType, 'Login'>;

export const LoginPage = () => {
	const { isSmall, isTablet } = useBreakpoint();

	const navigation = useNavigation<NavigationProps>();

	const handleGoRegistrePage= () =>{
		navigation.navigate("Register")
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState(false);
	const validar = () => {
		console.log(email)
		console.log(password)

		if (password.length < 6) {
			console.log("senha deve ser ter 6 ou mais carateres")
			setError(true);
		}else if (password.length >= 6){
			setError(false);
		}


	}
	return (
		<Main>
			<Scroll>
				<Conteiner isSmall={isSmall} isTablet={isTablet}>
					<ContentWrapper>
						<Headerauth />

						<LoginForm isSmall={isSmall}>
							<Title
								isSmall={isSmall}
								isTablet={isTablet}
								maxFontSizeMultiplier={1.5}
							>
								Conecte-se
							</Title>

							<FormConteiner>
								<Input textplace={"Digite seu e-mail"}
									   label={"E-mail:"}
									   value={email}
									   onChangeText={setEmail}
										/>

								<Input
									textplace={"Digite sua senha"}
									label={"Senha:"}
									password
									autocapitalize={"none"}
									value={password}
									onChangeText={setPassword}
									error={error}
								/>
								<ForgotPasswordContainer>
									<ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
								</ForgotPasswordContainer>
							</FormConteiner>
						</LoginForm>
					</ContentWrapper>

					<ButtonSection isTablet={isTablet}>
						<ButtonAuth onPress={validar} text={"Conecte-se"} />

						<View>
							<TextPrivacidade isSmall={isSmall}>
								Não tem conta?{" "}
								<TextHighlight isSmall={isSmall} onPress={handleGoRegistrePage} >Criar conta</TextHighlight>
							</TextPrivacidade>
						</View>
					</ButtonSection>

					<ButtonSection isTablet={isTablet}>
						<SsoButton />
					</ButtonSection>
				</Conteiner>
			</Scroll>
		</Main>
	);
};
