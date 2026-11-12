import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardHospital } from "../../components/cardHospital";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import { SectionCardHospital } from "../../components/sectionCardHospital";
import { SectionScrollhorizontal } from "../../components/sectionCardHospitalSideCarousel";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Conteiner, Main, ScrollContent, Subtitle } from "./style";
import { useHospitals } from "../../features/hospitals/HospitalsContext";

export const HomePage = () => {
	const { isSmall, isTablet } = useBreakpoint();
  const { hospitals, loading, error, refresh } = useHospitals();

	return (
		<Main>
			<Conteiner>
				<Header title={"Home"} />
				<ScrollContent showsVerticalScrollIndicator={false}>
          {loading && <Text>Carregando hospitais...</Text>}
          {!!error && <Text onPress={() => void refresh()}>{error} Toque para tentar novamente.</Text>}
          {!loading && !error && hospitals.length === 0 && <Text>Nenhum hospital cadastrado no servidor.</Text>}
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
