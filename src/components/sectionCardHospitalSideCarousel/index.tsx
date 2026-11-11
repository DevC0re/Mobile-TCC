import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { CardHospital } from "../cardHospital";
import { HorizontalScrollConteiner } from "./style";
import { HOSPITALS } from "../../features/medupDemo/data";

const HORIZONTAL_PADDING = 14;
const CARD_GAP = 16;
const MAX_CARD_WIDTH = 440;

export const SectionScrollhorizontal = () => {
  const { width: screenWidth } = useWindowDimensions();
  const [viewportWidth, setViewportWidth] = useState(screenWidth);

  // O card ocupa o espaço entre as margens laterais. Isso evita que o
  // próximo card apareça cortado antes de o usuário rolar o carrossel.
  const cardWidth = Math.max(
    1,
    Math.min(viewportWidth - HORIZONTAL_PADDING * 2, MAX_CARD_WIDTH),
  );

  return (
    <HorizontalScrollConteiner
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={cardWidth + CARD_GAP}
      snapToAlignment="start"
      onLayout={(event) => {
        const nextWidth = event.nativeEvent.layout.width;
        if (nextWidth > 0 && nextWidth !== viewportWidth) {
          setViewportWidth(nextWidth);
        }
      }}
    >
      {HOSPITALS.slice(0, 3).map((hospital) => (
        <CardHospital
          key={hospital.id}
          hospital={hospital}
          highestScore
          carouselWidth={cardWidth}
        />
      ))}
    </HorizontalScrollConteiner>
  );
};
