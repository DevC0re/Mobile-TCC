import styled from "styled-components/native";
import { theme } from "../../style/theme";
import type { InfoTagVariant } from "./index";

const backgroundColors: Record<InfoTagVariant, string> = {
  success: "#DDF7E4",
  danger: "#FFE1E4",
  info: "#DBECF8",
  rating: "#FFF5C4",
  neutral: "#EEF1F5",
};

const textColors: Record<InfoTagVariant, string> = {
  success: "#078537",
  danger: "#B42335",
  info: "#215D9B",
  rating: "#866400",
  neutral: "#516579",
};

interface TagStyleProps {
  $variant: InfoTagVariant;
  $large: boolean;
}

export const TagStyle = styled.View<TagStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: ${({ $large }) => ($large ? "6px" : "4px")};
  padding: ${({ $large }) => ($large ? "7px 11px" : "5px 9px")};
  min-height: ${({ $large }) => ($large ? "30px" : "25px")};
  border-radius: 16px;
  background-color: ${({ $variant }) => backgroundColors[$variant]};
`;

export const BadgeText = styled.Text<TagStyleProps>`
  font-family: ${theme.fonts.semibold};
  color: ${({ $variant }) => textColors[$variant]};
  font-size: ${({ $large }) => ($large ? "12px" : "10px")};
  line-height: ${({ $large }) => ($large ? "17px" : "15px")};
`;
