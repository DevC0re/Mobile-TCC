import { useNavigation } from "@react-navigation/native";
import { Undo2 } from "lucide-react-native";
import { Back } from "./style";

export const BackButton = () => {
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};
	return (
		<Back onPress={handleBack}>
			<Undo2 />
		</Back>
	);
};
