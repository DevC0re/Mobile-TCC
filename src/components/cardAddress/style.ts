import styled from "styled-components/native";
import { Pressable } from "react-native";
import { theme } from "../../style/theme";

export const Container = styled.View`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px 20px;
  min-height: 190px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 18px;
`;

export const Content = styled.View`
  flex: 1;
  gap: 12px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 22px;
  color: ${theme.colors.navy};
  flex-shrink: 1;
`;

export const Description = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 17px;
  color: #597795;
  flex-shrink: 1;
`;

export const EditButton = styled(Pressable)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const PrincipalBadge = styled.View`
  background-color: #deeff4;
  padding: 6px 16px;
  border-radius: 30px;
  align-self: flex-start;
`;

export const PrincipalText = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 15px;
  color: #37869b;
`;
