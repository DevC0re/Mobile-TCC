import styled from "styled-components/native";
import { ScrollView, View, Text } from "react-native";
import { theme } from "../../style/theme";
import { SafeAreaView } from "react-native-safe-area-context";

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
    gap: 25px;
`;

export const ScrollContent = styled(ScrollView).attrs({
	contentContainerStyle: {
		gap: 25,
		flexGrow: 1,
	},
})``;

export const Subtitle = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "15px" : "20px")};
    font-family: ${theme.fonts.extrabold};
    text-align: center;
`;
