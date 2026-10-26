import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const HorizontalScrollConteiner = styled(ScrollView).attrs({
	contentContainerStyle: {
		gap: 5,
		padding: 5,
		flexGrow: 1,
	},
})``;
