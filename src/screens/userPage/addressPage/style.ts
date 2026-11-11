import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../style/theme";
import { View, Text } from "react-native";

export const Main = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.colors.white};
`;

export const Conteiner = styled(View)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
    padding: 20px;
    justify-content: flex-start;
    gap: 20px;
`;
export const Description = styled(Text)`    
    font-size: 16px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.dustyGray};
`;
export const TextHelper = styled(Text)`
    font-size: 16px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.dustyGray};
`;
export const SetionCard = styled(View)` 
    gap: 20px;
`
