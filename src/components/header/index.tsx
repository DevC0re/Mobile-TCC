import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import LogoMedup from "../logo";
import LogoHeader from "./logoHeader";
import { Headerconteiner, Title } from "./style";

interface PropsHeader {
	title: string;
}

export const Header = ({ title }: PropsHeader) => {
	const { isSmall, isTablet } = useBreakpoint();

	const navigation = useNavigation();
	const handleBack = () => {
		navigation.goBack();
	};
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
