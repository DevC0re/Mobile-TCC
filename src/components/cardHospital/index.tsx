import { View, Image, Text, Pressable } from "react-native";
import hospital from "../../assets/img.png";
import { Heart, MapPin } from "lucide-react-native";
import { useState } from "react";
import {
	Hospitaladress,
	HospitalContainer,
	HospitalConteinerText,
	HospitalImage,
	HospitalName,
	Line,
	NameHospital,
	TagContainer,
	TextAdress,
} from "./style";
import { InfoTag } from "../infoTag";

interface HospitalProps {
	highestScore?: boolean;
}

export const CardHospital = ({ highestScore }: HospitalProps) => {
	const [favorite, setFavorite] = useState<boolean>(false);

	const addfavorite = () => {
		setFavorite((prevState) => !prevState);
	};

	return (
		<HospitalContainer highestScore={highestScore}>
			<HospitalImage source={hospital} highestScore={highestScore} />
			<HospitalConteinerText>
				<HospitalName>
					<NameHospital> Hospital Geral de Grajaú</NameHospital>
					<Pressable onPress={addfavorite}>
						<Heart fill={favorite ? "#C82909" : "none"} color={"#C82909"} />
					</Pressable>
				</HospitalName>

				<Hospitaladress>
					<MapPin />
					<TextAdress> Rua Francisco Octávio Pacca</TextAdress>
				</Hospitaladress>

				<Line></Line>

				<TagContainer>
					<InfoTag />
					<InfoTag />
					<InfoTag />
				</TagContainer>
			</HospitalConteinerText>
		</HospitalContainer>
	);
};
