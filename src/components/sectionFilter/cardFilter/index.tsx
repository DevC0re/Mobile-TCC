import { Text, View } from "react-native";
import { CardFilterContainer, CardFilterText, CardStyle } from "./style";

interface CardFilterProps {
	icon: React.ReactNode;
	text: string;
}
export const CardFilter = ({ icon, text }: CardFilterProps) => {
	return (
		<CardStyle>
			<CardFilterContainer>{icon}</CardFilterContainer>
			<CardFilterText>{text}</CardFilterText>
		</CardStyle>
	);
};
