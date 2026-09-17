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
import {MessageErro} from "../../components/erroMsg";
import {setItemAsync} from "expo-secure-store";

type NavigationProps = NativeStackNavigationProp<NavigationType, 'Login'>;


export const LoginPage = () => {
	const { isSmall, isTablet } = useBreakpoint();

	const usertest = {
		email: "test@gmail.com",
		password: "123456",
	}
	const navigation = useNavigation<NavigationProps>();

	const handleGoRegistrePage= () =>{
		navigation.navigate("Register")
	}

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const [eformData, setEformData] = useState("")

	const [error, setError] = useState(false)

	const [loading, setLoading] = useState(false)

	const handleLogin = async () => {

		setLoading(true)

		if (!formData.email.trim() || !formData.password.trim()) {
			setEformData("")
			setError(false)

			setEformData("Preencha todos os campos")
			setError(true)
		} else if ( formData.email != usertest.email || formData.password != usertest.password) {
			setEformData("")
			setError(false)

			setError(true)
			setEformData("Email ou senha incorretos. Por favor, verifique")

		} else if (formData.email === usertest.email && formData.password === usertest.password) {
			setItemAsync("token", "true")

		}
		setLoading(false)

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
									   value={formData.email}
									   onChangeText={(value) => setFormData(prevState => ({...prevState, email: value}))}
										error={error}
								/>
								{error && (
									<MessageErro errorText={eformData}/>
								) }


								<Input
									textplace={"Digite sua senha"}
									label={"Senha:"}
									password
									autocapitalize={"none"}
									value={formData.password}
									onChangeText={(value) => setFormData(prevState => ({...prevState, password: value}))}
									error={error}
								/>
								{error && (
									<MessageErro errorText={eformData}/>
								) }

								<ForgotPasswordContainer>
									<ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
								</ForgotPasswordContainer>
							</FormConteiner>
						</LoginForm>
					</ContentWrapper>

					<ButtonSection isTablet={isTablet}>
						<ButtonAuth onPress={handleLogin} text={"Conecte-se"} disabled={loading} />

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
