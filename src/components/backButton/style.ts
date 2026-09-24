import { Pressable } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const Back = styled(Pressable)`
    background-color: ${theme.colors.white};
    padding: 4px;
    justify-content: center;
    border-radius: 999px;
    align-self: flex-start;
`;
