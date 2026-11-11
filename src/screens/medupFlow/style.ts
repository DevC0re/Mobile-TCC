import styled from "styled-components/native";
import { theme } from "../../style/theme";

export const LargeHospitalImage = styled.Image`
  width: 100%;
  height: 175px;
  background-color: #e6f1f8;
  border-radius: 12px;
`;
export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
export const IconPressable = styled.Pressable`
  min-width: 42px;
  min-height: 42px;
  align-items: center;
  justify-content: center;
`;
export const DescriptionArea = styled.View`
  flex: 1;
  gap: 4px;
`;
export const ScoreRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;
export const CriteriaRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-vertical: 7px;
`;
export const CommentInput = styled.TextInput`
  min-height: 150px;
  border-radius: 12px;
  padding: 12px;
  color: ${theme.colors.navy};
  font-size: 14px;
  line-height: 21px;
  font-family: ${theme.fonts.regular};
  text-align-vertical: top;
  background-color: #ffffff;
`;
export const PhotoPicker = styled.Pressable`
  border-radius: 12px;
  border-width: 1.5px;
  border-style: dashed;
  border-color: #91bac9;
  background-color: #e5f5fa;
  min-height: 58px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-direction: row;
`;
export const PreviewImage = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 9px;
`;
export const ModalBackdrop = styled.Pressable`
  flex: 1;
  background-color: rgba(23, 44, 61, 0.42);
  justify-content: flex-end;
`;
export const BottomSheet = styled.View`
  background-color: #ffffff;
  padding: 20px 18px 28px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  max-height: 75%;
  gap: 15px;
`;
export const SheetRow = styled.Pressable`
  min-height: 52px;
  border-bottom-width: 1px;
  border-color: #e6edf3;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const SearchBox = styled.TextInput`
  min-height: 44px;
  border-width: 1px;
  border-color: #dce7f0;
  border-radius: 12px;
  padding: 8px 14px;
  font-size: 14px;
  color: ${theme.colors.navy};
  font-family: ${theme.fonts.regular};
`;
export const InsuranceBrand = styled.View`
  min-height: 105px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 14px;
`;
export const InsuranceBrandText = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 36px;
  color: #543bd9;
  text-align: center;
`;

export const ReviewPhoto = styled.Image`
  width: 100%;
  aspect-ratio: 2;
  border-radius: 12px;
  background-color: #e6f1f8;
`;
export const DeleteReviewButton = styled.Pressable`
  min-height: 48px;
  border-width: 1px;
  border-color: #ed3649;
  border-radius: 11px;
  background-color: #fff8f8;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const DeleteReviewText = styled.Text`
  font-family: ${theme.fonts.semibold};
  font-size: 14px;
  color: #d52232;
  text-align: center;
`;
