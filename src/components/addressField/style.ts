
import styled from "styled-components/native";
import {theme} from "../../style/theme";


export const FieldWrapper = styled.View`
  flex: 1;
  gap: 4px;
  min-width: 0px;
`;

export const FieldLabel = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.navy};
`;

export const FieldInput = styled.TextInput`
  width: 100%;
  min-height: 43px;
  padding: 9px 12px;

  border-radius: 9px;
  border-width: 1px;
  border-color: #d8e3ed;

  background-color: ${theme.colors.white};
  color: ${theme.colors.navy};

  font-family: ${theme.fonts.regular};
  font-size: 13px;
`;
