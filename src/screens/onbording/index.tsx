import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text,Image} from "react-native";
import logo from "../../assets/logo.png"

export const Onbording = () => {
    return(
        <SafeAreaView>
            <View>
                <Text>MedUp</Text>
                <Image source={logo} />
            </View>

        </SafeAreaView>


    )
}