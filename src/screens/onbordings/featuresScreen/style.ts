import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../../style/theme";

export const Main = styled(SafeAreaView)`

    background-color: ${theme.colors.skyBlue};
    height: 100%;
`;

export const Content = styled(View)`
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    padding-top: 30px;
    padding-bottom: 60px;
    padding-left: 7px;
    padding-right: 7px;
    
    
`;
