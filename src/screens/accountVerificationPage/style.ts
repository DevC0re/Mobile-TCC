import styled from "styled-components/native";
import {View, Text} from "react-native";
import {theme} from "../../style/theme";



export const TextContainer = styled(View)`
    align-items: center;
`

export const TextHighlight = styled(Text)`
    color: ${theme.colors.Neutral800};
    font-family: ${theme.fonts.bold};
`

export const SendcodeContent = styled(View)`
    align-items: center;
    gap: 8px;
`
export const SendcodeText = styled(Text)`
    font-family: ${theme.fonts.regular};
     color: ${theme.colors.Neutral600};
`
export const SendcodeLink = styled(Text)`
    font-family: ${theme.fonts.regular};
    text-decoration-line: underline;
    color: ${theme.colors.Neutral400};
    
`