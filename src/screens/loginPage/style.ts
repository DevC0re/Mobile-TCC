import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../style/theme";
import { ScrollView, Text, View } from "react-native";

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const Main = styled(SafeAreaView)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
`;

export const Conteiner = styled(View)<ResponsiveProps>`
    padding: ${(props) => (props.isTablet ? "50px 60px" : "30px 25px")};
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => (props.isSmall ? "20px" : "35px")};
    height: 100%;
`;

export const LoginForm = styled(View)<ResponsiveProps>`
    width: 100%;
    align-items: center;
    gap: ${(props) => (props.isSmall ? "25px" : "35px")};
`;

export const Title = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => {
			if (props.isSmall) return "24px";
			if (props.isTablet) return "36px";
			return "30px";
		}};
    color: ${theme.colors.navy};
    font-family: ${theme.fonts.bold};
`;

export const FormConteiner = styled(View)<ResponsiveProps>`
    padding: ${(props) => (props.isTablet ? "0 40px" : "0 16px")};
    gap: 12px;
    width: 100%;
`;

export const ButtonSection = styled(View)<ResponsiveProps>`
    width: 100%;
    padding: ${(props) => (props.isTablet ? "0 40px" : "0 16px")};
    gap: 16px;
`;

export const TextPrivacidade = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "12px" : "14px")};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.navy};
    text-align: center;
`;

export const TextHighlight = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "12px" : "14px")};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.teal}; 
`;
export const ForgotPasswordLink = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "12px" : "14px")};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.teal};
    text-decoration-line: underline;
 
`;

export const ForgotPasswordContainer = styled(View)`
    align-items: flex-end;
`;

export const ContentWrapper = styled(View)`
	width: 100%;
	gap: 60px;
`
