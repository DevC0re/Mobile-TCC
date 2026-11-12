import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ButtonAuth } from "../../components/auth/authButton";
import { Headerauth } from "../../components/auth/authheader";
import { Input } from "../../components/auth/authInput";
import { MessageErro } from "../../components/erroMsg";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { confirmarEmail, reenviarCodigo } from "../../services/usuarioService";
import { getApiErrorMessage } from "../../services/apiError";
import {
  ButtonSectionAuth, ConteinerAuth, ContentWrapper, Main, Textinstruction, TitleAuth,
} from "../../style/global";
import type { NavigationType } from "../../types/navigationType";
import { SendcodeContent, SendcodeLink, SendcodeText, TextContainer, TextHighlight } from "./style";

type Nav = NativeStackNavigationProp<NavigationType, "VerifyAccount">;
export const VerificationPage = () => {
  const navigation = useNavigation<Nav>();
  const { params } = useRoute<RouteProp<NavigationType, "VerifyAccount">>();
  const email = params.email;
  const { isSmall } = useBreakpoint();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds((time) => Math.max(0, time - 1)), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const resend = async () => {
    if (seconds > 0 || loading) return;
    setLoading(true);
    setError("");
    try {
      await reenviarCodigo(email);
      setSeconds(60);
    } catch (err) {
      setError(getApiErrorMessage(err, "Não foi possível reenviar o código."));
    } finally { setLoading(false); }
  };

  const verify = async () => {
    if (!/^\d{6}$/.test(code.trim())) {
      setError("Digite os 6 dígitos recebidos por e-mail.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await confirmarEmail(email, code.trim());
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    } catch (err) {
      setError(getApiErrorMessage(err, "Código incorreto ou expirado."));
    } finally { setLoading(false); }
  };

  return (
    <Main>
      <ConteinerAuth>
        <ContentWrapper>
          <Headerauth />
          <View>
            <TextContainer>
              <TitleAuth>Verifique a conta</TitleAuth>
              <Textinstruction isSmall={isSmall}>
                O código foi enviado para <TextHighlight>{email}</TextHighlight>. Digite o código para ativar sua conta.
              </Textinstruction>
            </TextContainer>
            <Input textplace="Código de 6 dígitos" label="Insira o código" value={code} keyboardType="number-pad"
              onChangeText={(value) => setCode(value.replace(/\D/g, "").slice(0, 6))} error={Boolean(error)} />
            {!!error && <MessageErro errorText={error} />}
          </View>
          <SendcodeContent>
            <SendcodeText>
              Não recebeu o código? <SendcodeLink onPress={resend} disabled={seconds > 0 || loading}>Reenviar código</SendcodeLink>
            </SendcodeText>
            <SendcodeText>{seconds > 0 ? `Reenviar código em 00:${String(seconds).padStart(2, "0")}` : "Você já pode reenviar o código."}</SendcodeText>
          </SendcodeContent>
        </ContentWrapper>
        <ButtonSectionAuth>
          <ButtonAuth text={loading ? "Verificando..." : "Verifique a conta"} disabled={loading} onPress={verify} />
        </ButtonSectionAuth>
      </ConteinerAuth>
    </Main>
  );
};
