import styled from "styled-components/native";
import { Image, View, Text } from "react-native";
import { theme } from "../../style/theme";

interface CardHospitalProps {
	highestScore?: boolean;
}

export const HospitalImage = styled(Image)<CardHospitalProps>`
    
    width: ${(props) => (props.highestScore ? "280px" : "100px")};
    height: ${(props) => (props.highestScore ? "180px" : "100px")};
    border: 1px solid ${theme.colors.black};
    border-radius: 10px;
`;

export const HospitalConteinerText = styled(View)<CardHospitalProps>`
    gap: 5px;
    
`;

export const HospitalContainer = styled(View)<CardHospitalProps>`
    flex-direction: ${(props) => (props.highestScore ? "column" : "row")};
    padding: 15px 10px;
    background: ${theme.colors.white};
    border-radius: 12px;
    gap: 5px;
    flex: 1;
`;

export const HospitalName = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-items: flex-start;
`;

export const Hospitaladress = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 10px;
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
    justify-content: flex-start;
`;
export const NameHospital = styled(Text)`
    font-size: 18px;
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.black}
`;
export const TextAdress = styled(Text)`
    font-size: 15px;
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
`;
