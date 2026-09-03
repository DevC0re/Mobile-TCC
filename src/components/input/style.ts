import styled from "styled-components/native";
import {TextInput, View, Text} from "react-native";
import {theme} from "../../style/theme";


export const Inputstyle = styled(View)`
    background-color: ${theme.colors.white};
    flex-direction: row;
    align-items: center;
   justify-content: space-between;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1.5px solid ${theme.colors.Neutraln200};
`
export const LabelInput = styled(Text)`
    font-size: 14px;
    color: ${theme.colors.navy};
    font-family: ${theme.fonts.regular};
    line-height: 22px;
`

