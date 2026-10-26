import { TextInput, View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const InputContainer = styled(View)`
    border: 1px solid ${theme.colors.black};
    border-radius: 20px;
    background-color: ${theme.colors.white};
    padding: 10px 20px;
    gap: 5px;
    flex-direction: row;
    align-items: center;
   
`;

export const StyledInput = styled(TextInput)`
    font-family: ${theme.fonts.medium};
    font-size: 20px;
    flex: 1;
    padding: 0 ;
`;
