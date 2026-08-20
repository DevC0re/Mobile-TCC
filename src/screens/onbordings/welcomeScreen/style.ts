import styled from "styled-components/native";
import {theme} from "../../../style/theme";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Main = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.colors.teal};
    padding: 80px 25px 60px 25px;
  
`
export const Conteiner = styled(View)`
    
    align-items: center;
    justify-content: space-between;
    gap: 70px;
  
   
    
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
    text-align: center;
    line-height: normal;
    
    
`

export const WrapperText = styled(View)`
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
   
    
`