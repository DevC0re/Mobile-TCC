
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../style/theme";

export const Main = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Hint = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 12px;
  color: ${theme.colors.teal};
`;

export const FormTop = styled.View`
  gap: 9px;
`;

export const SubmitArea = styled.View`
  margin-top: 24px;
`;
