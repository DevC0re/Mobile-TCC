import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CircleUserRound, House, Search } from "lucide-react-native";
import type { NavigationType } from "../../types/navigationType";
import { ButtonNavbar, NavBarContainer } from "./style";

type NavigationProps = NativeStackNavigationProp<NavigationType>;

interface navBarProps {
	activeHomePage?: boolean;
	activeSearchPage?: boolean;
	activeUserPage?: boolean;
}

export const NavBar = ({
	activeHomePage,
	activeSearchPage,
	activeUserPage,
}: navBarProps) => {
	const navigation = useNavigation<NavigationProps>();

	const handleHome = () => {
		navigation.navigate("HomePage");
	};
	const handleSearch = () => {
		navigation.navigate("SearchPage");
	};
	const handleUser = () => {
		navigation.navigate("UserPage");
	};

	return (
		<NavBarContainer>
			<ButtonNavbar isActive={activeSearchPage} onPress={handleSearch}>
				<Search />
			</ButtonNavbar>

			<ButtonNavbar isActive={activeHomePage} onPress={handleHome}>
				<House />
			</ButtonNavbar>

			<ButtonNavbar isActive={activeUserPage} onPress={handleUser}>
				<CircleUserRound />
			</ButtonNavbar>
		</NavBarContainer>
	);
};
