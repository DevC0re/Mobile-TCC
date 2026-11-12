import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
	Poppins_800ExtraBold,
	useFonts,
} from "@expo-google-fonts/poppins";

import { Routes } from "./navigation";
import { DemoProvider } from "./features/medupDemo/DemoContext";
import { AuthProvider } from "./features/auth/AuthContext";
import { HospitalsProvider } from "./features/hospitals/HospitalsContext";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_800ExtraBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return <AuthProvider><HospitalsProvider><DemoProvider><Routes /></DemoProvider></HospitalsProvider></AuthProvider>;
}
