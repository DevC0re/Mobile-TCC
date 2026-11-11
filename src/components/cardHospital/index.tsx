import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Heart, MapPin, Star } from "lucide-react-native";
import { Pressable, type PressableProps } from "react-native";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { HOSPITALS, getHospitalWithReviews, type HospitalInfo } from "../../features/medupDemo/data";
import type { NavigationType } from "../../types/navigationType";
import { InfoTag } from "../infoTag";
import {
  Hospitaladress,
  HospitalContainer,
  HospitalConteinerText,
  HospitalImage,
  HospitalName,
  Line,
  NameHospital,
  TagContainer,
  TextAdress,
} from "./style";

interface HospitalProps {
  /** Mantém a possibilidade de usar o mesmo card no carrossel da Home. */
  highestScore?: boolean;
  /** Largura controlada pelo carrossel; mantém o card dentro da área visível. */
  carouselWidth?: number;
  hospital?: HospitalInfo;
  /** Útil nas etapas de avaliação, onde o coração não precisa aparecer. */
  showFavorite?: boolean;
  onPress?: () => void;
}

type Nav = NativeStackNavigationProp<NavigationType>;

export const CardHospital = ({
  highestScore = false,
  carouselWidth: providedCarouselWidth,
  hospital = HOSPITALS[0],
  showFavorite = true,
  onPress,
}: HospitalProps) => {
  const navigation = useNavigation<Nav>();
  const { favorites, toggleFavorite, reviews } = useMedupDemo();
  const { width, isSmall } = useBreakpoint();
  // A imagem deve respeitar o padding interno (16 px de cada lado).
  // Nunca usar width: 100% + aspect-ratio aqui: em alguns layouts nativos,
  // a combinação pode calcular a imagem maior do que a área interna.
  const carouselWidth = providedCarouselWidth ?? Math.min(Math.max(width - 28, 1), 440);
  const carouselImageWidth = Math.max(1, carouselWidth - 32);
  const carouselImageHeight = Math.round(carouselImageWidth / 1.58);
  const summary = getHospitalWithReviews(hospital, reviews);
  const favorite = favorites.includes(hospital.id);

  // Os dados são demonstrativos. Se o backend ainda não informou o status,
  // NÃO afirmar que um hospital real está aberto ou fechado.
  const status = hospital.openNow;
  const statusText = status == null ? "Horário não informado" : status ? "Aberto agora" : "Fechado";
  const statusVariant = status == null ? "neutral" : status ? "success" : "danger";
  const ownershipText = hospital.ownership === "publico"
    ? "Público"
    : hospital.ownership === "privado"
      ? "Privado"
      : "Tipo não informado";

  return (
    <HospitalContainer
      $carousel={highestScore}
      $carouselWidth={carouselWidth}
      onPress={onPress ?? (() => navigation.navigate("HospitalProfile", { hospitalId: hospital.id }))}
      accessibilityRole="button"
      accessibilityLabel={`Abrir perfil de ${hospital.name}`}
    >
      <HospitalImage
        source={hospital.image}
        resizeMode="cover"
        $carousel={highestScore}
        $isSmall={isSmall}
        $imageWidth={carouselImageWidth}
        $imageHeight={carouselImageHeight}
      />

      <HospitalConteinerText $carousel={highestScore}>
        <HospitalName>
          <NameHospital $carousel={highestScore} $isSmall={isSmall} numberOfLines={2}>{hospital.name}</NameHospital>
          {showFavorite && (
            <HospitalFavoriteButton
              favorite={favorite}
              onPress={(event) => {
                event.stopPropagation();
                toggleFavorite(hospital.id);
              }}
            />
          )}
        </HospitalName>

        <Hospitaladress>
          <MapPin size={17} color="#DA2934" fill="#DA2934" strokeWidth={2} />
          <TextAdress $carousel={highestScore} numberOfLines={1}>{hospital.address || hospital.city}</TextAdress>
        </Hospitaladress>

        <Line />

        <TagContainer $carousel={highestScore}>
          <InfoTag label={statusText} variant={statusVariant} large={highestScore} />
          <InfoTag label={ownershipText} variant="info" large={highestScore} />
          <InfoTag
            label={summary.rating.toFixed(1).replace(".", ",")}
            icon={Star}
            variant="rating"
            large={highestScore}
          />
        </TagContainer>
      </HospitalConteinerText>
    </HospitalContainer>
  );
};

const HospitalFavoriteButton = ({
  favorite,
  onPress,
}: {
  favorite: boolean;
  onPress: PressableProps["onPress"];
}) => (
  <Pressable
    onPress={onPress}
    hitSlop={10}
    accessibilityRole="button"
    accessibilityLabel={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
  >
    <Heart fill={favorite ? "#C82909" : "none"} color="#C82909" size={22} />
  </Pressable>
);
