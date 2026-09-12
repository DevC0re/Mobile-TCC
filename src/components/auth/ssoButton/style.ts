import styled from "styled-components/native";
import { Pressable, Text } from "react-native";
import { theme } from "../../../style/theme";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const ButtonStyle = styled(Pressable)`
    padding: 8px 24px;
    height: 54px;
    border-radius: 999px;
    width: 100%;
    justify-content: center;
    align-items: center; 
    gap: 16px;
    border: 2px solid ${theme.colors.white};
    flex-direction: row;
   
`;

export const TextButton = styled(Text)<ResponsiveProps>`
    font-size:  ${(props) => (props.isSmall ? "12px" : "14px")};
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.navy};
    line-height: 20px;
   
`;
