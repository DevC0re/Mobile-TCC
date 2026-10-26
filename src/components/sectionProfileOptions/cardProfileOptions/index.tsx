import { View, Text } from "react-native";
import { ChevronRight, UserRoundCog } from "lucide-react-native";
import {Card, TextDescription, TextTitle} from "./style";

export const CardProfileOptions = () => {
	return (
		<Card>
			<UserRoundCog />
			<View>
				<TextTitle>Editar perfil</TextTitle>
				<TextDescription>Atualize suas informações</TextDescription>
			</View>
			<ChevronRight />
		</Card>
	);
};
