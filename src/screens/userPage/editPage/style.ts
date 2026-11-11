import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../style/theme";

export const Main = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.colors.white};
`;
