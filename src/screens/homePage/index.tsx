import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardHospital } from "../../components/cardHospital";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import { SectionCardHospital } from "../../components/sectionCardHospital";
import { SectionScrollhorizontal } from "../../components/sectionCardHospitalSideCarousel";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Conteiner, Main, ScrollContent, Subtitle } from "./style";

export const HomePage = () => {
	const { isSmall, isTablet } = useBreakpoint();

	return (
		<Main>
			<Conteiner>
				<Header title={"Home"} />
				<ScrollContent showsVerticalScrollIndicator={false}>
					<SectionScrollhorizontal />

					<View>
						<Subtitle isSmall={isSmall}>Próximos de Você</Subtitle>
					</View>

					<SectionCardHospital />
				</ScrollContent>
				<NavBar activeHomePage={true} />
			</Conteiner>
		</Main>
	);
};
