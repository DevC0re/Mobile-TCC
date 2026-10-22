import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../style/theme";
import { View } from "react-native";

export const Main = styled(SafeAreaView)`
    background-color: ${theme.colors.white};
    flex: 1;
    
`;

export const Conteiner = styled(View)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
    gap: 25px;
    height: 100%;
    padding: 10px;
`;

export const ImageContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;