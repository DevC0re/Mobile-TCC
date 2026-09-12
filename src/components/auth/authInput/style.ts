import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../../style/theme";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}
interface ButtonProps {
	Erro: boolean;
}

export const Inputstyle = styled(View)<ButtonProps>`
    background-color: ${theme.colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 16px;
    border-radius: 8px;
	border: 1.5px solid ${({ Erro }) => (Erro ? theme.colors.redErro : theme.colors.Neutraln200)};
	
`;
export const LabelInput = styled(Text)<ResponsiveProps>`
    font-size:  ${(props) => (props.isSmall ? "12px" : "14px")};
    color: ${theme.colors.navy};
    font-family: ${theme.fonts.regular};
    line-height: 22px;
`;

