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
import {useState} from "react";
import {validations} from "../../utils/validations";
import {MessageErro} from "../../components/erroMsg";
import * as querystring from "node:querystring";

type NavigationProps = NativeStackNavigationProp<NavigationType, 'Register'>;

interface FormType{
	name: string;
	email: string;
	password: string;
	confirmPassword: string;

}
interface FormTypeError{
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const RegisterPage = () => {
	const { isSmall, isTablet } = useBreakpoint();

	const navigation = useNavigation<NavigationProps>();

	const handleGoLoginPage= () =>{
		navigation.navigate("Login")
	}



	const [formData, setFormData] = useState<FormType>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",

	})
	const [eformData, setEformData] = useState<FormTypeError>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		password: false,
		confirmPassword: false,
	});

	const [loading, setLoading] = useState(false)

	const handleCreateuser = async () => {
			setLoading(true)

		let hasErrors = false;

			if (!formData.name.trim()){
				setEformData((errotext) => ({...errotext, name: ""}))
				setErrors((erro) => ({...erro, name: false}))

				setEformData((errotext) => ({...errotext, name: "Nome é obrigatorio"}))
				setErrors((erro) => ({...erro, name: true}))

				hasErrors = true
			}


		if (!formData.email.trim()){

			setEformData((errotext) => ({...errotext, email: "E-mail é obrigatorio" }));
			setErrors((erro) => ({...erro, email: true}))
			hasErrors = true;
		} else if (!validations(formData.email.trim())){
			setEformData((errotext) => ({...errotext, email: "" }));
			setErrors((erro) => ({...erro, email: false}))

			setEformData((errotext) => ({...errotext, email: "Digite um email Valido"}))
			setErrors((erro) => ({...erro, email: true}))
			hasErrors = true;
		}


		if (!formData.password.trim()){

			setEformData((errotext) => ({...errotext, password: "Senha é obrigatoria" }));
			setErrors((erro) => ({...erro, password: true}))
			hasErrors = true;

		}else if (formData.password.length <6){
			setEformData((errotext) => ({...errotext, password: "" }));
			setErrors((erro) => ({...erro, password: false}))

			setEformData((errotext) => ({...errotext, password: "Sua senha precisa ter no minimo 6 caracteres" }));
			setErrors((erro) => ({...erro, password: true}))
			hasErrors = true;
		}

		if (!formData.confirmPassword.trim()){

			setEformData((errotext) => ({...errotext, confirmPassword: "Confirme sua senha" }));
			setErrors((erro) => ({...erro, confirmPassword: true}))
			hasErrors = true;
		}else if (formData.password.trim() !== formData.confirmPassword.trim()){
			setEformData((errotext) => ({...errotext, confirmPassword: "" }));
			setErrors((erro) => ({...erro, confirmPassword: false}))

			setEformData((errotext) => ({...errotext, confirmPassword: "As senhas não coincidem" }));
			setErrors((erro) => ({...erro, confirmPassword: true}))
			hasErrors = true;
		}

		if (!hasErrors){
			const user = {
				name: formData.name,
				email: formData.email,
				password: formData.password,

			}
			// Falta a implementação do método de criação de usuário do back-end.

		}
		setLoading(false)
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
								<Input label={"Nome:"} textplace={"Digite o texto aqui"} value={formData.name}
									   onChangeText={(text) => setFormData(prevState => ({...prevState, name: text}))}
									error={errors.name}
								/>
								{errors.name && (
									<MessageErro errorText={eformData.name}/>
								)}

								<Input
									label={"Email:"}
									textplace={"Digite o email"}
									autocapitalize={"none"}
									value={formData.email}
									onChangeText={(text) => setFormData(prevState => ({...prevState, email: text}))}
									error={errors.email}
								/>
								{errors.email && (
									<MessageErro errorText={eformData.email}/>
								)
								}


								<Input
									label={"Senha:"}
									textplace={" Sua senha Deve conter 6 caracteres."}
									password
									autocapitalize={"none"}
									value={formData.password}
									onChangeText={text => setFormData(prevState => ({...prevState, password: text}))}
									error={errors.password}
								/>
								{errors.password &&(
									<MessageErro errorText={eformData.password}/>
								)}

								<Input
									label={"Confirme sua senha:"}
									textplace={"Confirme sua senha"}
									password
									autocapitalize={"none"}
									value={formData.confirmPassword}
									onChangeText={(text) => setFormData(prevState => ({...prevState, confirmPassword: text}))}
									error={errors.confirmPassword}
								/>
								{errors.confirmPassword && (
									<MessageErro errorText={eformData.confirmPassword}/>
								)}
							</FormConteiner>
						</RegisterForm>
					</ContentWrapper>


					<ButtonSection isTablet={isTablet}>
						<ButtonAuth onPress={handleCreateuser} text={"Criar nova conta"} disabled={false} />

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
