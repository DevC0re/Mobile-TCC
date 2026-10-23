import styled from "styled-components/native";
import { Image, View, Text } from "react-native";
import { theme } from "../../style/theme";

interface CardHospitalProps {
	highestScore?: boolean;
}

interface ResponsiveProps {
	isSmall?: boolean;
	isTablet?: boolean;
}

export const HospitalImage = styled(Image)<CardHospitalProps>`
    width: ${(props) => (props.highestScore ? "280px" : "100px")};
    height: ${(props) => (props.highestScore ? "180px" : "100%")};
    border: 1px solid ${theme.colors.black};
    border-radius: 10px;
`;

export const HospitalConteinerText = styled(View)<CardHospitalProps>`
    gap: 5px;
    flex: 1;
`;

export const HospitalContainer = styled(View)<CardHospitalProps>`
    flex-direction: ${(props) => (props.highestScore ? "column" : "row")};
    padding: 15px 10px;
    background: ${theme.colors.white};
    border-radius: 12px;
    gap: 5px;
    flex: 1;
    overflow: hidden;
    align-items: center;
`;

export const HospitalName = styled(View)`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; /* Mantém o coração à direita */
    gap: 10px;
`;

export const Hospitaladress = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Line = styled(View)`
    height: 1px;
    align-self: stretch;
    background: ${theme.colors.black};
`;

export const TagContainer = styled(View)`
    flex-direction: row;
    gap: 15px;
    padding: 2px 4px;
    justify-content: center;
`;

export const NameHospital = styled(Text)<ResponsiveProps>`
    font-size: ${(props) => (props.isSmall ? "15px" : "18px")};
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.black};
	text-align: start;
	flex: 1;
`;

export const TextAdress = styled(Text)`
    font-size: 15px;
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
	flex: 1;
`;

