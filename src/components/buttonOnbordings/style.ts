import styled from "styled-components/native";
import { Text, Pressable} from "react-native";
import {theme} from "../../style/theme";

export const Button = styled(Pressable)`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    width: 360px;
    padding: 14px 0;
    border-radius: 12px;
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 0.30);
`

export const ButtonText = styled(Text)`
    color: ${theme.colors.navy};
    font-family: ${theme.fonts.regular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

