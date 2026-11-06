
import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const MapCard = styled.View`
  height: 124px;
  overflow: hidden;
  border-radius: 14px;
  background-color: #dce9e5;
`;

export const MapLayer = styled.View`
  flex: 1;
`;

export const LocationButtonWrapper = styled.View`
  position: absolute;
  bottom: 22px;
  left: 0px;
  right: 0px;
  align-items: center;
`;

export const LocationButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 6px;

  background-color: ${theme.colors.white};
  border-radius: 25px;
  padding: 8px 15px;
  elevation: 2;
`;

export const LocationButtonText = styled.Text`
  color: ${theme.colors.navy};
  font-family: ${theme.fonts.medium};
  font-size: 11px;
`;

export const Attribution = styled.Text`
  font-size: 9px;
  color: ${theme.colors.teal};
  text-align: right;
  margin-top: 2px;
`;

export const MarkerBubble = styled.View`
  width: 29px;
  height: 29px;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.white};
  border-radius: 16px;
  border-width: 2px;
  border-color: ${theme.colors.teal};
`;
