import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const SectionFilterScroll = styled(ScrollView).attrs({
	contentContainerStyle: {
		gap: 15,
	},
})`
    flex-grow: 0;
   `;
