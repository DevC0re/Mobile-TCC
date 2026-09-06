import {Welcome} from "./screens/onbordings/welcomeScreen";
import {useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium} from "@expo-google-fonts/poppins";
import {Features} from "./screens/onbordings/featuresScreen";
import {RegisterPage} from "./screens/registerPage";
import {Text, useWindowDimensions, View} from "react-native";



export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,

  });


  if (!fontsLoaded) {
    return null;
  }



  return (

      <RegisterPage/>





  );
}


