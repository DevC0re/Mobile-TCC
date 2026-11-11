import type { LucideIcon } from "lucide-react-native";
import { BadgeText, TagStyle } from "./style";

export type InfoTagVariant = "success" | "danger" | "info" | "rating" | "neutral";

interface InfoTagProps {
  label: string;
  variant?: InfoTagVariant;
  icon?: LucideIcon;
  /** Aumenta discretamente as tags no card em destaque da Home. */
  large?: boolean;
}

export const InfoTag = ({
  label,
  variant = "neutral",
  icon: Icon,
  large = false,
}: InfoTagProps) => (
  <TagStyle $variant={variant} $large={large}>
    {Icon && (
      <Icon size={large ? 16 : 13} color={tagTextColor[variant]} strokeWidth={2} />
    )}
    <BadgeText $variant={variant} $large={large} numberOfLines={1}>
      {label}
    </BadgeText>
  </TagStyle>
);

const tagTextColor: Record<InfoTagVariant, string> = {
  success: "#078537",
  danger: "#B42335",
  info: "#215D9B",
  rating: "#866400",
  neutral: "#516579",
};
