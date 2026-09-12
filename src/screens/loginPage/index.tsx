import { SafeAreaView } from "react-native-safe-area-context";
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
	ForgotPasswordLink, ContentWrapper,
} from "./style";
import { View, Text, ScrollView } from "react-native";
import { Headerauth } from "../../components/auth/authheader";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Input } from "../../components/auth/authInput";
import { ButtonAuth } from "../../components/auth/authButton";
import { SsoButton } from "../../components/auth/ssoButton";
import { Scroll } from "../../style/global";

export const LoginPage = () => {
	const { isSmall, isTablet } = useBreakpoint();

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
								<Input textplace={"Digite seu e-mail"} label={"E-mail:"} />

								<Input
									textplace={"Digite sua senha"}
									label={"Senha:"}
									password
									autocapitalize={"none"}
								/>
								<ForgotPasswordContainer>
									<ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
								</ForgotPasswordContainer>
							</FormConteiner>
						</LoginForm>

					</ContentWrapper>


					<ButtonSection isTablet={isTablet}>
						<ButtonAuth text={"Conecte-se"} />

						<View>
							<TextPrivacidade isSmall={isSmall}>
								Não tem conta?{" "}
								<TextHighlight isSmall={isSmall}>Criar conta</TextHighlight>
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
