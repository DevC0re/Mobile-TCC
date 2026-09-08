import {Text, Pressable, View, Image} from "react-native";

import Arrow from '../../../components/backArrow/index'
import Fundo from "../../../assets/backgroud.png";
import {ButtonOnBordings} from "../../../components/buttonOnbordings";
import {Content, Main} from "./style";


export const Features = () =>{



    return (
        <Main>

            <Content>
                    <View>

                        <View>
                            {/*//view do button de retornar*/}
                            <Pressable>
                                <Arrow/>
                            </Pressable>
                        </View>

                        <Text>MedUp</Text>

                    </View>

                    <Image source={Fundo}/>

                <View>

                    <View>
                        <Text>Avalie e confie!</Text>
                        <Text>Consulte opiniões e avaliações de outros pacientes para
                            tomar decisões mais seguras e encontrar hospitais bem avaliados.</Text>
                    </View>

                    <View>

                    </View>

                </View>

                <ButtonOnBordings text={"Próximo"}/>

            </Content>

        </Main>

    )
}