import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Conteiner, Main, Subtitle, Textconteiner, Title, WrapperText} from "./style";
import Logo from "../../../components/logo";




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
                        Descubra hospitais próximos da sua localização e tenha
                        acesso rápido às informações que você precisa para escolher o melhor atendimento.
                    </Textconteiner>
                </WrapperText>


                <View>

                </View>

                <TouchableOpacity>
                    <Text>Comecar</Text>
                </TouchableOpacity>


            </Conteiner>

        </Main>

    )
}





