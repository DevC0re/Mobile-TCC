import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
	useFonts,
} from "@expo-google-fonts/poppins";

import {Routes} from "./navigation";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_500Medium,
	});

	if (!fontsLoaded) {
		return null;
	}

	return <Routes />;
}
