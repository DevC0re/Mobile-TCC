import styled from "styled-components/native";
import { theme } from "../../style/theme";

interface CardVariantProps {
  $carousel: boolean;
}

/**
 * highestScore=false: card horizontal para listas.
 * highestScore=true: card em coluna, com foto grande, para o carrossel.
 */
export const HospitalContainer = styled.Pressable<
  CardVariantProps & { $carouselWidth: number }
>`
  flex-direction: ${({ $carousel }) => ($carousel ? "column" : "row")};
  align-items: ${({ $carousel }) => ($carousel ? "stretch" : "center")};
  width: ${({ $carousel, $carouselWidth }) =>
    $carousel ? `${$carouselWidth}px` : "100%"};
  min-height: 124px;
  padding: ${({ $carousel }) => ($carousel ? "16px" : "12px 10px")};
  background-color: ${({ $carousel }) =>
    $carousel ? theme.colors.beige : theme.colors.white};
  border-radius: ${({ $carousel }) => ($carousel ? "18px" : "13px")};
  gap: ${({ $carousel }) => ($carousel ? "12px" : "10px")};
  overflow: hidden;
`;

export const HospitalImage = styled.Image<
  CardVariantProps & {
    $isSmall: boolean;
    $imageWidth: number;
    $imageHeight: number;
  }
>`
  width: ${({ $carousel, $isSmall, $imageWidth }) =>
    $carousel ? `${$imageWidth}px` : $isSmall ? "76px" : "94px"};
  height: ${({ $carousel, $isSmall, $imageHeight }) =>
    $carousel ? `${$imageHeight}px` : $isSmall ? "88px" : "96px"};
  flex-shrink: 0;
  border-width: 1px;
  border-color: #607f91;
  border-radius: 11px;
  background-color: #d8eaf0;
`;

export const HospitalConteinerText = styled.View<CardVariantProps>`
  flex: ${({ $carousel }) => ($carousel ? 0 : 1)};
  align-self: stretch;
  min-width: 0px;
  gap: ${({ $carousel }) => ($carousel ? "10px" : "7px")};
`;

export const HospitalName = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
`;

export const NameHospital = styled.Text<
  CardVariantProps & { $isSmall: boolean }
>`
  flex: 1;
  flex-shrink: 1;
  font-size: ${({ $carousel, $isSmall }) =>
    $carousel ? ($isSmall ? "17px" : "19px") : $isSmall ? "14px" : "16px"};
  line-height: ${({ $carousel, $isSmall }) =>
    $carousel ? ($isSmall ? "24px" : "27px") : $isSmall ? "19px" : "22px"};
  font-family: ${theme.fonts.semibold};
  color: ${theme.colors.black};
`;

export const Hospitaladress = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TextAdress = styled.Text<CardVariantProps>`
  flex: 1;
  flex-shrink: 1;
  font-size: ${({ $carousel }) => ($carousel ? "14px" : "12px")};
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.black};
`;

export const Line = styled.View`
  height: 1px;
  align-self: stretch;
  background-color: #bbc5cb;
`;

export const TagContainer = styled.View<CardVariantProps>`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ $carousel }) => ($carousel ? "space-around" : "flex-start")};
  gap: ${({ $carousel }) => ($carousel ? "8px" : "5px")};
`;
