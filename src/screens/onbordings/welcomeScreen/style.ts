import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../../style/theme";

export const Main = styled(SafeAreaView)`

    background-color: ${theme.colors.teal};
    
`;
export const Conteiner = styled(View)`
    height: 100%;
    justify-content:space-between;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 60px;
    padding-left: 25px ;
    padding-right: 25px ;
`;

export const Title = styled(Text)`
    font-size: 32px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};

`;

export const Subtitle = styled(Text)`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
    font-size: 32px;
`;

export const Textconteiner = styled(Text)`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.regular};
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    text-align: center;


`;

export const WrapperText = styled(View)`
    flex-direction: column;
    align-items: center;
    gap: 10px;
    


`;
