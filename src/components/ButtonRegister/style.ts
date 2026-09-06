import styled from "styled-components/native";
import {Pressable, Text} from "react-native";
import {theme} from "../../style/theme";


interface ResponsiveProps {
    isSmall?: boolean;
    isTablet?: boolean;
}

export const Buttonregister = styled(Pressable)`
    padding: 12px 14px;
    border-radius: 999px;
    background-color: ${theme.colors.teal};
    width: 100%;
    align-items: center;
`

export const TextButton = styled(Text)<ResponsiveProps>`
    font-size:  ${(props) => props.isSmall ? '12px' : '14px'};
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.white};
    line-height: 20px;
    
`