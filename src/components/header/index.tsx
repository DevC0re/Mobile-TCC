import { View, Pressable, Text } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import LogoMedup from "../logo";
import LogoHeader from "./logoHeader";
import { Headerconteiner, Title } from "./style";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface PropsHeader {
	title: string;
}

export const Header = ({ title }: PropsHeader) => {
	const { isSmall, isTablet } = useBreakpoint();

	return (
		<Headerconteiner>
			<Pressable>
				<ArrowLeft />
			</Pressable>
			<Title isSmall={isSmall}>{title}</Title>
			<LogoHeader />
		</Headerconteiner>
	);
};
