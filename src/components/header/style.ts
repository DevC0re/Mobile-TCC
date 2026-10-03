import styled from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../style/theme";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const Headerconteiner = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: ${theme.colors.white};
`;

export const Title = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "15px" : "20px")};
    font-family: ${theme.fonts.extrabold};
    text-align: center;
`;
