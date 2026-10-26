import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../style/theme";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const Main = styled(SafeAreaView)`
    background-color: ${theme.colors.white};
    flex: 1;
`;

export const Conteiner = styled(View)`
    background-color: ${theme.colors.skyBlue};
	flex: 1;
`;

export const ScrollContent = styled(ScrollView).attrs({
	contentContainerStyle: {
		gap: 25,
		flexGrow: 1,
		paddingTop: 25,
	},
})``;

export const Subtitle = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "15px" : "20px")};
    font-family: ${theme.fonts.extrabold};
    text-align: center;
`;
