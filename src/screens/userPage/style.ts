import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const Main = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.colors.white};
`;
export const Conteiner = styled(View)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
    height: 100%;
    padding: 0 10px;
`;

export const Carduser = styled(View).attrs({
	style: {
		boxShadow: "3px 5px 5px 0px rgba(0, 0, 0, 0.25)",
	},
})`
    height: 210px;
    background-color: ${theme.colors.white};
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    padding: 15px;
`;

export const PhotoUser = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 170px;
    border: 1px solid ${theme.colors.black};
`;

export const UserName = styled(Text)`
    font-family: ${theme.fonts.semibold};
    font-size: 20px;
	color: ${theme.colors.black};
`;
export const TextInfoContainer = styled(View)`
    width: 100%;
`;
export const TextInfo = styled(Text)`
    font-size: 18px;
    font-family: ${theme.fonts.semibold};
	color: ${theme.colors.black};
    
`;

export const TextButton = styled(Text)`
	
`