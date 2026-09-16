import styled from "styled-components/native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "./theme";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const Scroll = styled(ScrollView).attrs({
	contentContainerStyle: {
		flexGrow: 1,
	},

	showsVerticalScrollIndicator: false,
})``;

export const Main = styled(SafeAreaView)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
`;

export const ConteinerAuth = styled(View)<ResponsiveProps>`
    padding: ${(props) => (props.isTablet ? "50px 60px" : "30px 25px")};
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => (props.isSmall ? "20px" : "35px")};
    height: 100%;
`;

export const TitleAuth = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => {
			if (props.isSmall) return "24px";
			if (props.isTablet) return "36px";
			return "30px";
		}};
    color: ${theme.colors.navy};
    font-family: ${theme.fonts.bold};
`;
