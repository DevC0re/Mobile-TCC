import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const Main = styled(SafeAreaView)`
    background-color: ${theme.colors.white};
    flex: 1;
    
`;

export const Conteiner = styled(View)`
    background-color: ${theme.colors.skyBlue};
    flex: 1;
    gap: 25px;
    height: 100%;
    padding: 10px;
`;

export const ImageContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const FilterTitle = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 16px;
  color: ${theme.colors.navy};
`;

export const FilterHelp = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 12px;
  color: ${theme.colors.Neutral600};
  margin-top: -10px;
`;

export const ResultsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ClearButton = styled.Pressable`
  min-height: 38px;
  padding: 8px 10px;
  align-items: center;
  justify-content: center;
`;

export const ClearButtonText = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: 13px;
  color: ${theme.colors.navy};
  text-decoration-line: underline;
`;

export const EmptyResults = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 14px;
  padding: 20px;
`;
