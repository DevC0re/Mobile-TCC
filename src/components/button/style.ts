import styled from "styled-components/native";
import { theme } from "../../style/theme";

interface ButtonStyleProps {
	$outlined: boolean;
}

export const ButtonContainer = styled.Pressable<ButtonStyleProps>`
  width: 100%;
  min-height: 56px;
  padding: 12px 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  border-width: 2px;
  border-color: ${theme.colors.navy};

  background-color: ${({ $outlined }) => ($outlined ? theme.colors.beige : theme.colors.navy)};
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  flex-shrink: 1;

  color: ${({ $outlined }) => ($outlined ? theme.colors.navy : theme.colors.white)};
`;
