import {
	ButtonSectionAuth,
	ConteinerAuth,
	ContentWrapper,
	Main,
	Textinstruction,
	TitleAuth,
} from "../../style/global";
import { Headerauth } from "../../components/auth/authheader";
import { View, Text } from "react-native";
import {
	SendcodeContent,
	SendcodeLink,
	SendcodeText,
	TextContainer,
	TextHighlight,
} from "./style";
import { Input } from "../../components/auth/authInput";
import { ButtonAuth } from "../../components/auth/authButton";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationType } from "../../types/navigationType";
import { MessageErro } from "../../components/erroMsg";

type NavigationProps = NativeStackNavigationProp<NavigationType, "NewPassword">;

export const VerificationPage = () => {
	const email = "test@gmail.com";

	const [code, setCode] = useState("");

	const [error, setError] = useState(false);

	const [messageErro, setMessageErro] = useState("");

	const [time, setTime] = useState(60);

	const [disabled, setDisabled] = useState(true);

	const [isrunnig, setIsrunnig] = useState(false);

	const Resendcode = () => {
		setTime(60);
		setIsrunnig(!isrunnig);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((t) => {
				if (t <= 0) {
					clearInterval(timer);
					setDisabled(false);
					return 0;
				}
				return t - 1;
			});
		}, 1000);
	}, [isrunnig]);

	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, "0");
	const seconds = (time % 60).toString().padStart(2, "0");

	const navigation = useNavigation<NavigationProps>();

	const validatecode = () => {
		if (code.trim() == "1234") {
			navigation.navigate("NewPassword");
		} else if (!code.trim()) {
			setError(true);
			setMessageErro("Por favor, insira o código de verificação");
		} else if (code.trim() !== "1234") {
			setError(true);
			setMessageErro("Código de verificação incorreto. Tente novamente");
		} else {
			setError(false);
			setMessageErro("");
		}
	};

	return (
		<Main>
			<ConteinerAuth>
				<ContentWrapper>
					<Headerauth />
					<View>
						<TextContainer>
							<TitleAuth>Verifique a conta</TitleAuth>
							<Textinstruction>
								O código foi enviado para <TextHighlight>{email}</TextHighlight>
								{"  "}
								Digite o código para verificar sua conta.
							</Textinstruction>
						</TextContainer>
						<Input
							textplace={"Código de 4 dígitos"}
							label={"Insira o código"}
							value={code}
							onChangeText={setCode}
							error={error}
						/>
						{error && <MessageErro errorText={messageErro} />}
					</View>

					<SendcodeContent>
						<SendcodeText>
							Não recebeu o código?{" "}
							<SendcodeLink onPress={Resendcode} disabled={disabled}>
								Reenviar código
							</SendcodeLink>
						</SendcodeText>
						<SendcodeText>
							Reenviar código em {minutes}:{seconds}
						</SendcodeText>
					</SendcodeContent>
				</ContentWrapper>

				<ButtonSectionAuth>
					<ButtonAuth
						text={"Verifique a conta"}
						disabled={false}
						onPress={validatecode}
					/>
				</ButtonSectionAuth>
			</ConteinerAuth>
		</Main>
	);
};
