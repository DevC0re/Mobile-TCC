import styled from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {theme} from "../../style/theme";
import {View, Text} from "react-native";

export const Main = styled(SafeAreaView)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
`
export const Conteiner = styled(View)`
    padding: 30px 25px;
    align-items: center;
    height: 100%;
   justify-content: space-between;
    
`

export const RegisterForm  = styled(View)`
    width: 100%;
    align-items: center;
    gap: 45px;

`

export const Title = styled(Text)`
    font-size: 30px;
    color: ${theme.colors.navy};
    font-family: ${theme.fonts.bold};
    
`

export const FormConteiner = styled(View)`
    padding: 0 16px;
    gap: 12px;
    width: 100%;
`

export const Header = styled(View)`
    width: 100%;
    justify-content: flex-start;
    padding: 16px ;
`
export const ButtonSection = styled(View)`
    width: 100%;
    padding: 0 16px;
    gap: 16px;
`

export const TextPrivacidade = styled(Text)`
    font-size: 14px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.navy};
    text-align: center;
`
export const TextHighlight = styled(Text)`
    font-size: 14px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.teal};
`


