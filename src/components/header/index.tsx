import { View, Pressable, Text } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import LogoMedup from "../logo";
import LogoHeader from "./logoHeader";
import { Headerconteiner, Title } from "./style";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import {useNavigation} from "@react-navigation/native";

interface PropsHeader {
	title: string;
}

export const Header = ({ title }: PropsHeader) => {
	const { isSmall, isTablet } = useBreakpoint();

	const navigation = useNavigation();
	const handleBack = () => {
		navigation.goBack();
	}
	return (
		<Headerconteiner>
			<Pressable onPress={handleBack}>
				<ArrowLeft />
			</Pressable>
			<Title isSmall={isSmall}>{title}</Title>
			<LogoHeader />
		</Headerconteiner>
	);
};
