import {
	ButtonSectionAuth,
	ConteinerAuth,
	ContentWrapper,
	Main,
	TitleAuth,
} from "../../style/global";
import { Headerauth } from "../../components/auth/authheader";
import { View, Text } from "react-native";
import { Input } from "../../components/auth/authInput";
import { TextConteiner, Textinstruction } from "./style";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { ButtonAuth } from "../../components/auth/authButton";
import { useState } from "react";
import { validations } from "../../utils/validations";
import { MessageErro } from "../../components/erroMsg";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../types/navigationType";

type NavigationProps = NativeStackNavigationProp<
	NavigationType,
	"RecoveryPassword"
>;

export const PasswordRecovery = () => {
	const { isSmall, isTablet } = useBreakpoint();

	const navigation = useNavigation<NavigationProps>();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [error, setError] = useState(false);

	const handleRecoverAccount = () => {
		if (!email.trim()) {
			setError(true);
			setEmailError("Preencha os campos");
		} else if (!validations(email.trim())) {
			setError(true);
			setEmailError("Digite um e-mail válido");
		} else {
			setError(false);
			setEmailError("");

			navigation.navigate("VerifyAccount");
		}
	};

	return (
		<Main>
			<ConteinerAuth>
				<ContentWrapper>
					<Headerauth />
					<View>
						<TextConteiner>
							<TitleAuth>Esqueceu sua senha</TitleAuth>
							<Textinstruction isSmall={isSmall}>
								{" "}
								Sem problemas! Insira seu endereço de e-mail abaixo e enviaremos
								um código para redefinir sua senha.
							</Textinstruction>
						</TextConteiner>
						<Input
							textplace={"Digite seu E-mail"}
							label={"Email:"}
							value={email}
							onChangeText={setEmail}
							error={error}
						/>
						{error && <MessageErro errorText={emailError} />}
					</View>
				</ContentWrapper>

				<ButtonSectionAuth>
					<ButtonAuth
						text={"Enviar instrução de redefinição"}
						disabled={false}
						onPress={handleRecoverAccount}
					/>
				</ButtonSectionAuth>
			</ConteinerAuth>
		</Main>
	);
};
