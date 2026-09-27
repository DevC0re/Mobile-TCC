import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {CardHospital} from "../../components/cardHospital";


export const HomePage = () => {
    return (
        <SafeAreaView>
            <Text>home</Text>
            <CardHospital/>
        </SafeAreaView>

    )
}