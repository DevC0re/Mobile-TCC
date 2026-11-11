import styled from "styled-components/native";
import { Pressable } from "react-native";
import { theme } from "../../style/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 25px;
  padding: 10px;
    justify-content: center; 
`;

export const ProfileImage = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 73px;
  border-width: 2px;
  border-color: #ffffff;
`;

export const ChangePhotoButton = styled(Pressable)`
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
`;

export const ChangePhotoText = styled.Text`
    font-size: 16px; 
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.black};
`;

export const ProfileImageContainer = styled.View`
  width: 85px;
  height: 85px;
  border-radius: 73px;
  background-color: ${theme.colors.beige};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
