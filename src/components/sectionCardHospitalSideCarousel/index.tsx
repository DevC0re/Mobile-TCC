import { ScrollView } from "react-native";
import { CardHospital } from "../cardHospital";
import { HorizontalScrollConteiner } from "./style";

export const SectionScrollhorizontal = () => {
	return (
		<HorizontalScrollConteiner
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		>
			<CardHospital highestScore={true} />
			<CardHospital highestScore={true} />
			<CardHospital highestScore={true} />
		</HorizontalScrollConteiner>
	);
};
