import {View, Image, Text, Pressable} from "react-native";
import hospital from '../../assets/img.png'
import {Heart, MapPin, } from "lucide-react-native";
import {useState} from "react";

export const CardHospital = () => {

    const [favorite, setFavorite] = useState<boolean>(false)

    const addfavorite = () => {
        setFavorite(prevState => !prevState);
    }

    return (
        <View>
            <Image source={hospital} style={{width: 100, height: 100}} />
            <View>
                <Text> Hospital Geral de Grajaú</Text>
                <Pressable onPress={addfavorite} >
                    <Heart fill={ favorite ? "#C82909" : "none"}  color={"#C82909" } />
                </Pressable>

                <View>
                    <MapPin/>
                    <Text> Rua Francisco Octávio Pacca</Text>
                </View>

                <View>
                    
                </View>

                <View></View>

            </View>
        </View>
    )
}