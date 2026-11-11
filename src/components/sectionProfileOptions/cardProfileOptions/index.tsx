import { View } from "react-native";
import { ChevronRight, type LucideIcon } from "lucide-react-native";
import { Card, ConteineText, TextDescription, TextTitle } from "./style";

interface CardProfileOptionsProps {
	icon: LucideIcon;
	title: string;
	description: string;
	onPress?: () => void;
}

export const CardProfileOptions = ({
	icon: Icon,
	title,
	description,
	onPress,
}: CardProfileOptionsProps) => {
	return (
		<Card onPress={onPress}>
			<Icon />

			<ConteineText>
				<TextTitle>{title}</TextTitle>
				<TextDescription>{description}</TextDescription>
			</ConteineText>

			<ChevronRight />
		</Card>
	);
};
