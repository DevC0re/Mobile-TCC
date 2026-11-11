import { ChevronRight, Heart } from "lucide-react-native";
import type { GestureResponderEvent } from "react-native";
import type { HospitalInfo } from "../../features/medupDemo/data";
import { theme } from "../../style/theme";
import {
  ActionSlot,
  CaptionText,
  CompactCardRoot,
  FlexContent,
  HospitalThumb,
  TinyTitle,
} from "./style";

interface HospitalMiniCardProps {
  hospital: HospitalInfo;
  onPress?: () => void;
  trailing?: "heart" | "arrow" | "none";
  favorite?: boolean;
  onToggleFavorite?: () => void;
}

export const HospitalMiniCard = ({ hospital, onPress, trailing = "none", favorite = false, onToggleFavorite }: HospitalMiniCardProps) => (
  <CompactCardRoot onPress={onPress} disabled={!onPress} accessibilityRole={onPress ? "button" : undefined}>
    <HospitalThumb source={hospital.image} resizeMode="cover" />
    <FlexContent>
      <TinyTitle numberOfLines={2}>{hospital.name}</TinyTitle>
      <CaptionText numberOfLines={1}>{hospital.city}</CaptionText>
      <CaptionText>
        ★ {hospital.rating.toFixed(1).replace(".", ",")} ({hospital.reviewCount.toLocaleString("pt-BR")} avaliações)
      </CaptionText>
    </FlexContent>
    {trailing === "arrow" && <ChevronRight size={20} color={theme.colors.navy} />}
    {trailing === "heart" && (
      <ActionSlot
        accessibilityRole="button"
        accessibilityLabel={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        onPress={(event: GestureResponderEvent) => { event.stopPropagation(); onToggleFavorite?.(); }}
      >
        <Heart size={21} color={favorite ? "#C63040" : theme.colors.navy} fill={favorite ? "#C63040" : "transparent"} />
      </ActionSlot>
    )}
  </CompactCardRoot>
);
