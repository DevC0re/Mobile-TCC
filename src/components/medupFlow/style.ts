import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const PageRoot = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;
export const WhiteCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 14px;
  padding: 14px;
  gap: 10px;
`;
export const CardRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const FlexContent = styled.View`
  flex: 1;
  gap: 3px;
`;
export const Heading = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 17px;
  color: ${theme.colors.navy};
`;
export const Subheading = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: ${theme.colors.navy};
`;
export const BodyText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.teal};
`;
export const CaptionText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 11px;
  line-height: 16px;
  color: ${theme.colors.teal};
`;
export const HospitalThumb = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-color: #e7f1f7;
`;
export const TinyTitle = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 13px;
  color: ${theme.colors.navy};
`;
export const CompactCardRoot = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  padding: 10px;
  border-radius: 13px;
  gap: 10px;
`;
export const ActionSlot = styled.Pressable`
  min-height: 44px;
  min-width: 40px;
  justify-content: center;
  align-items: center;
`;
export const StarButton = styled.Pressable`
  padding: 2px;
`;
export const StarLine = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
`;
export const NoteCard = styled.View`
  border-radius: 13px;
  background-color: #dcebf3;
  flex-direction: row;
  padding: 14px;
  gap: 12px;
  align-items: center;
`;
export const InsuranceCardRoot = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-radius: 13px;
  padding: 14px;
  background-color: ${theme.colors.white};
  gap: 10px;
  min-height: 74px;
`;
export const Divider = styled.View`
  height: 1px;
  background-color: #e4edf2;
`;
export const SmallButtonRow = styled.View`
  flex-direction: row;
  gap: 8px;
`;
export const SoftButton = styled.Pressable`
  flex: 1;
  min-height: 46px;
  border-width: 1px;
  border-color: ${theme.colors.navy};
  border-radius: 10px;
  background-color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
export const SoftButtonText = styled.Text`
  font-family: ${theme.fonts.semibold};
  color: ${theme.colors.navy};
  font-size: 13px;
  text-align: center;
`;
export const SectionSpace = styled.View`
  gap: 11px;
`;
