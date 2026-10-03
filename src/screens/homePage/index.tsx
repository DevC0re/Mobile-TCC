import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardHospital } from "../../components/cardHospital";
import { Main, Conteiner, ScrollContent, Subtitle } from "./style";
import { NavBar } from "../../components/navBar";
import { Header } from "../../components/header";
import { SectionScrollhorizontal } from "../../components/sectionCardHospitalSideCarousel";
import { SectionCardHospital } from "../../components/sectionCardHospital";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export const HomePage = () => {
	const { isSmall, isTablet } = useBreakpoint();

	return (
		<Main>
			<Conteiner>
				<Header />
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
