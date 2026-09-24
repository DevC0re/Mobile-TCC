import styled from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../style/theme";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const TextConteiner = styled(View)`
    align-items: center;
`;

export const Textinstruction = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "12px" : "14px")};
    text-align: center;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.Neutral600};
    
`;
