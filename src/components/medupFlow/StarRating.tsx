import { Star } from "lucide-react-native";
import { theme } from "../../style/theme";
import { StarButton, StarLine } from "./style";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
}

export const StarRating = ({ value, onChange, size = 20 }: StarRatingProps) => (
  <StarLine accessibilityLabel={`Nota ${value} de 5`}>
    {[1, 2, 3, 4, 5].map((rating) => {
      const selected = rating <= Math.round(value);
      return onChange ? (
        <StarButton
          key={rating}
          onPress={() => onChange(rating)}
          accessibilityRole="button"
          accessibilityLabel={`Avaliar com ${rating} estrela${rating > 1 ? "s" : ""}`}
        >
          <Star size={size} color="#BA7419" fill={selected ? "#E3A449" : "transparent"} />
        </StarButton>
      ) : <Star key={rating} size={size} color="#BA7419" fill={selected ? "#E3A449" : "transparent"} />;
    })}
  </StarLine>
);
