import { CircleUserRound, House, Search } from "lucide-react-native";
import { ButtonNavbar, NavBarContainer } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationType } from "../../types/navigationType";

type NavigationProps = NativeStackNavigationProp<NavigationType>;

interface navBarProps {
	activeHomePage?: boolean;
	activeSearchPage?: boolean;
	activeUserConf?: boolean;
}

export const NavBar = ({
	activeHomePage,
	activeSearchPage,
	activeUserConf,
}: navBarProps) => {
	const navigation = useNavigation<NavigationProps>();

	const handleHome = () => {
		navigation.navigate("HomePage");
	};

	return (
		<NavBarContainer>
			<ButtonNavbar isActive={activeSearchPage}>
				<Search />
			</ButtonNavbar>

			<ButtonNavbar isActive={activeHomePage} onPress={handleHome}>
				<House />
			</ButtonNavbar>

			<ButtonNavbar isActive={activeUserConf}>
				<CircleUserRound />
			</ButtonNavbar>
		</NavBarContainer>
	);
};
