import type { ReactNode } from "react";
import { CardFilterContainer, CardFilterText, CardStyle } from "./style";

interface CardFilterProps {
  icon: ReactNode;
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export const CardFilter = ({
  icon,
  text,
  selected = false,
  onPress,
}: CardFilterProps) => (
  <CardStyle
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={`Filtrar por ${text}`}
    accessibilityState={{ selected }}
  >
    <CardFilterContainer>{icon}</CardFilterContainer>
    <CardFilterText>{text}</CardFilterText>
  </CardStyle>
);
