import styled from "styled-components/native";
import {View, Text} from "react-native";
import {theme} from "../../style/theme";

interface ResponsiveProps {
    isSmall?: boolean;
    isTablet?: boolean;
}

export const ErrorContainer = styled(View)`
	flex-direction: row;
	align-items: center;
	padding: 0 8px;
	gap: 5px;
	
`

export const ErrorText = styled(Text)<ResponsiveProps>`
	font-size: ${(props) => (props.isSmall ? "10px" : "14px")};
	font-family: ${theme.fonts.medium};
	color: ${theme.colors.redErro};
`