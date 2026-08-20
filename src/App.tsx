import {Text} from "react-native";
import {Welcome} from "./screens/onbordings/welcomeScreen";
import {useFonts, Poppins_700Bold, Poppins_400Regular} from "@expo-google-fonts/poppins";




export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,

  });

  if (!fontsLoaded) {
    return null;
  }

  return (

   <Welcome/>

  );
}


