import {ButtonSectionAuth, ConteinerAuth, ContentWrapper, Main, Textinstruction, TitleAuth} from "../../style/global";
import {Headerauth} from "../../components/auth/authheader";
import {View, Text} from "react-native";
import {SendcodeContent, SendcodeLink, SendcodeText, TextContainer, TextHighlight} from "./style";
import {Input} from "../../components/auth/authInput";
import {ButtonAuth} from "../../components/auth/authButton";


export const VerificationPage = () => {

    const email = "test@gmail.com"


    return (
        <Main>
            <ConteinerAuth>
                <ContentWrapper>
                    <Headerauth/>
                    <View>
                        <TextContainer>
                            <TitleAuth>
                                Verifique a conta
                            </TitleAuth>
                            <Textinstruction>
                                O código foi enviado para{" "}
                                <TextHighlight>
                                {email}
                                 </TextHighlight>{"  "}
                                Digite o código para verificar sua conta.
                            </Textinstruction>
                        </TextContainer>
                        <Input textplace={"Código de 4 dígitos"} label={"Insira o código"}/>
                    </View>

                    <SendcodeContent>
                        <SendcodeText>Não recebeu o código? <SendcodeLink>Reenviar código</SendcodeLink></SendcodeText>
                        <SendcodeText>Reenviar código em </SendcodeText>
                    </SendcodeContent>
                    

                </ContentWrapper>

                <ButtonSectionAuth>
                    <ButtonAuth text={"Verifique a conta"} disabled={false} />
                </ButtonSectionAuth>
            </ConteinerAuth>
        </Main>
    )
}