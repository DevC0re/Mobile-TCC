
import {View, Text, TouchableOpacity} from "react-native";
import {Conteiner, Main, Subtitle, Textconteiner, Title, WrapperText} from "./style";
import Logo from "../../../components/logo";
import {ButtonOnBordings} from "../../../components/buttonOnbordings";




export const Welcome = () =>{
    return(
        <Main>
            <Conteiner>
                <Title>
                    MedUp
                </Title>
                   <Logo/>
                <WrapperText>
                    <Subtitle>
                        Bem-vindo ao MedUp!
                    </Subtitle>
                    <Textconteiner>
                        Encontre hospitais próximos à sua localização e
                        tenha acesso rápido às informações necessárias para
                        escolher a melhor opção de atendimento.
                    </Textconteiner>
                </WrapperText>


                <View>

                </View>

                <ButtonOnBordings text={"Começar"} />




            </Conteiner>

        </Main>

    )
}





