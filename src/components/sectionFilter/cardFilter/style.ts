import styled from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "../../../style/theme";

export const CardFilterContainer = styled(View)`
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: 100px;
    align-items: center;
    padding: 10px 20px ;
    
`;
export const CardFilterText = styled(Text)`
     font-family: ${theme.fonts.medium};
    font-size: 20px;
    color: ${theme.colors.black};
    text-align: center;
`;

export const CardStyle = styled(View)`
    gap: 5px;
    align-items: center;
    padding: 5px 10px ;
    flex-direction: column;
    
`;
