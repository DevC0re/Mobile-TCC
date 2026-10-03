import { ScrollView, View } from "react-native";
import { SectionCard, SectionCardScroll } from "./style";
import { CardHospital } from "../cardHospital";

export const SectionCardHospital = () => {
	return (
		<SectionCardScroll showsVerticalScrollIndicator={false}>
			<SectionCard>
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
				<CardHospital />
			</SectionCard>
		</SectionCardScroll>
	);
};
