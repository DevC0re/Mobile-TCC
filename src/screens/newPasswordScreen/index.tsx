import {
	ButtonSectionAuth,
	ConteinerAuth,
	ContentWrapper,
	Main,
	Textinstruction,
	TitleAuth,
} from "../../style/global";
import { Headerauth } from "../../components/auth/authheader";
import { View } from "react-native";
import { TextContainer } from "../accountVerificationPage/style";
import { Input } from "../../components/auth/authInput";
import { useState } from "react";
import { ButtonAuth } from "../../components/auth/authButton";
import { MessageErro } from "../../components/erroMsg";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface ErrorMessage {
	password: string;
	confirmPassword: string;
}

export const NewPasswordScreen = () => {
	const { isSmall, isTablet } = useBreakpoint();

	const [password, setPassword] = useState("");

	const [confirmPassword, setConfirmPassword] = useState("");

	const [error, setError] = useState({
		password: false,
		confirmPassword: false,
	});

	const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
		password: "",
		confirmPassword: "",
	});

	const handleResetPassword = () => {
		if (!password.trim()) {
			setErrorMessage((errotext) => ({
				...errotext,
				password: "Campo obrigatório.",
			}));
			setError((error) => ({ ...error, password: true }));
		} else if (password.trim().length < 6) {
			setErrorMessage((errotext) => ({
				...errotext,
				password: "Sua senha precisa ter no minimo 6 caracteres",
			}));
			setError((erro) => ({ ...erro, password: true }));
		} else {
			setErrorMessage((errotext) => ({ ...errotext, password: "" }));
			setError((error) => ({ ...error, password: false }));
		}

		if (!confirmPassword.trim()) {
			setErrorMessage((errotext) => ({
				...errotext,
				confirmPassword: "Campo obrigatório.",
			}));
			setError((error) => ({ ...error, confirmPassword: true }));
		} else if (confirmPassword.trim() !== password.trim()) {
			setErrorMessage((errotext) => ({
				...errotext,
				confirmPassword: "As senhas não coincidem",
			}));
			setError((error) => ({ ...error, confirmPassword: true }));
		} else {
			setErrorMessage((errotext) => ({ ...errotext, confirmPassword: "" }));
			setError((error) => ({ ...error, confirmPassword: false }));
		}
	};

	return (
		<Main>
			<ConteinerAuth>
				<ContentWrapper>
					<Headerauth />
					<View>
						<TextContainer>
							<TitleAuth>Criar nova senha</TitleAuth>
							<Textinstruction>
								Por favor, insira e confirme sua nova senha. Você precisará
								fazer login após redefinir as configurações de fábrica.
							</Textinstruction>
						</TextContainer>
						<View>
							<Input
								textplace={"******"}
								label={"Senha:"}
								password
								autocapitalize={"none"}
								onChangeText={setPassword}
								error={error.password}
							/>
							{error.password && (
								<MessageErro errorText={errorMessage.password} />
							)}
							<Input
								textplace={"******"}
								label={"Confirme sua senha"}
								password
								autocapitalize={"none"}
								onChangeText={setConfirmPassword}
								error={error.confirmPassword}
							/>
							{error.confirmPassword && (
								<MessageErro errorText={errorMessage.confirmPassword} />
							)}
						</View>
					</View>
				</ContentWrapper>

				<ButtonSectionAuth>
					<ButtonAuth
						text={"Redefinir senha"}
						disabled={false}
						onPress={handleResetPassword}
					/>
				</ButtonSectionAuth>
			</ConteinerAuth>
		</Main>
	);
};
