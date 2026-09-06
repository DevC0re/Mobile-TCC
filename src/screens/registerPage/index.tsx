import {SafeAreaView} from "react-native-safe-area-context";
import {Input} from "../../components/input";
import {View, ScrollView} from "react-native";
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
import {useBreakpoint} from "../../hooks/useBreakpoint";

export const RegisterPage = () => {

    const {isSmall, isTablet} = useBreakpoint();

    return(
        <Main>
            <ScrollView>

                <Conteiner isSmall={isSmall} isTablet={isTablet}>

                    <Header>
                        <BackButton/>
                    </Header>

                    <RegisterForm isSmall={isSmall}>

                        <Title isSmall={isSmall} isTablet={isTablet} maxFontSizeMultiplier={1.5}>
                            Registro
                        </Title>

                        <FormConteiner isTablet={isTablet}>
                            <Input label={"Nome:"} textplace={"Digite o texto aqui"} />

                            <Input label={"Email:"} textplace={"Digite o email"} autocapitalize={"none"}/>

                            <Input label={"Senha:"} textplace={" Sua senha Deve conter 6 caracteres."} password autocapitalize={"none"} />

                            <Input label={"Confirme sua senha:"} textplace={"Confirme sua senha"} password autocapitalize={"none"} />

                        </FormConteiner>

                    </RegisterForm>

                    <ButtonSection isTablet={isTablet}>
                        <ButtonRegister text={"Criar nova conta"} />

                        <View>
                            <TextPrivacidade isSmall={isSmall}>
                                Não tem conta? <TextHighlight isSmall={isSmall}>Criar conta</TextHighlight>
                            </TextPrivacidade>
                            <TextPrivacidade isSmall={isSmall}>
                                Ao continuar, você concorda com nossos{" "}
                                <TextHighlight isSmall={isSmall}>Termos de Serviço</TextHighlight>
                                {" "}e{" "}
                                <TextHighlight isSmall={isSmall}>Política de Privacidade</TextHighlight>.
                            </TextPrivacidade>
                        </View>

                    </ButtonSection>

                </Conteiner>

            </ScrollView>


        </Main>
    )
}