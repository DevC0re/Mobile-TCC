import styled from "styled-components/native";
import {theme} from "../../../style/theme";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Main = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.colors.teal};
    justify-content: center;
`
export const Conteiner = styled(View)`
    
    justify-content: center;
    align-items: center;
    gap: 70px;
   
    padding-top: 80px;
    padding-bottom: 60px;
    padding-left: 25px ;
    padding-right: 25px ;
    
`

export const Title = styled(Text)`
    font-size: 32px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold}; 
   
`



export const Subtitle = styled(Text)`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
    font-size: 32px;
`

export const Textconteiner = styled(Text)`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.regular};
    font-size: 16px; 
    font-style: normal;
    line-height: normal;
    text-align: center;
    
    
`

export const WrapperText = styled(View)`
    flex-direction: column;
    align-items: center;
   // justify-content: flex-end;
    gap: 10px;
   
    
`