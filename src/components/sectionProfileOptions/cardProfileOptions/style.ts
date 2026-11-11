import styled from "styled-components/native";
import { View, Text, Pressable } from "react-native";
import { theme } from "../../../style/theme";

export const Card = styled(Pressable).attrs({
	style: {
		boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.25)",
	},
})`
    background: ${theme.colors.white};
    flex-direction: row;
    padding: 18px 16px;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
	width: 100%;
    
`;
export const ConteineText = styled(View)`
	width: 80%;
`;

export const TextTitle = styled(Text)`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.semibold};
    font-size: 18px;
    line-height: 24px;
`;
export const TextDescription = styled(Text)`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.regular};
    font-size: 16px;
    line-height: 20px;
`;
