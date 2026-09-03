import {SafeAreaView} from "react-native-safe-area-context";
import {Input} from "../../components/input";
import {View, Text} from "react-native";
import {
    ButtonSection,
    Conteiner, FormConteiner,
    Header,
    Main,
    RegisterForm,
    TextHighlight,
    TextPrivacidade,
    Title
} from "./style";
import {BackButton} from "../../components/backButton";
import {ButtonRegister} from "../../components/ButtonRegister";



export const RegisterPage = () => {
    return(
        <Main>
            <Conteiner>

                <Header>
                    <BackButton/>
                </Header>

                <RegisterForm>

                    <Title allowFontScaling={false}>Registro</Title>

                    <FormConteiner>
                        <Input label={"Nome:"} textplace={"Digite o texto aqui"} />

                        <Input label={"Email:"} textplace={"Digite o email"} autocapitalize={"none"}/>

                        <Input label={"Senha:"} textplace={"Deve conter 8 caracteres."} password autocapitalize={"none"} />

                        <Input label={"Confirme sua senha:"} textplace={"Digite sua senha"} password autocapitalize={"none"} />

                    </FormConteiner>

                </RegisterForm>

                <ButtonSection>
                    <ButtonRegister text={"Criar nova conta"} />

                    <View>
                        <TextPrivacidade>
                            Não tem conta? <TextHighlight>Criar conta</TextHighlight>
                        </TextPrivacidade>
                        <TextPrivacidade>
                            Ao continuar, você concorda com nossos
                            <TextHighlight>Termos de Serviço
                            </TextHighlight> e <TextHighlight>
                            Política de Privacidade
                        </TextHighlight>.
                        </TextPrivacidade>
                    </View>

                </ButtonSection>

            </Conteiner>

        </Main>
    )
}