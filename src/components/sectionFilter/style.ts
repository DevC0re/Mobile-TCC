import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const SectionFilterScroll = styled(ScrollView).attrs({
	contentContainerStyle: {
		gap: 15,
	},
})`
    flex-grow: 0;
   `;
