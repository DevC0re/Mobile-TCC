import {Welcome} from "./screens/onbordings/welcomeScreen";
import {useFonts, Poppins_700Bold, Poppins_400Regular} from "@expo-google-fonts/poppins";
import {Features} from "./screens/onbordings/featuresScreen";
import {PixelRatio} from "react-native";

console.log(PixelRatio.get())


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,

  });

  if (!fontsLoaded) {
    return null;
  }

  return (

  // <Welcome/>
      <Features/>


  );
}


