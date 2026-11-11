import {
  Baby,
  Bone,
  Brain,
  Eye,
  Heart,
  Salad,
  Sparkles,
  Stethoscope,
  UsersRound,
  type LucideIcon,
} from "lucide-react-native";
import {
  SPECIALTY_FILTERS,
  type SpecialtyFilterId,
} from "../../features/medupDemo/hospitalSearch";
import { CardFilter } from "./cardFilter";
import { SectionFilterScroll } from "./style";

const icons: Record<SpecialtyFilterId, LucideIcon> = {
  cardiologia: Heart,
  dermatologia: Sparkles,
  pediatria: Baby,
  nutricao: Salad,
  neurologia: Brain,
  oftalmologia: Eye,
  ortopedia: Bone,
  "clinico-geral": Stethoscope,
  geriatria: UsersRound,
};

interface SectionFilterProps {
  selectedSpecialties: readonly SpecialtyFilterId[];
  onToggleSpecialty: (specialty: SpecialtyFilterId) => void;
}

export const SectionFilter = ({
  selectedSpecialties,
  onToggleSpecialty,
}: SectionFilterProps) => (
  <SectionFilterScroll
    horizontal
    nestedScrollEnabled
    showsHorizontalScrollIndicator={false}
  >
    {SPECIALTY_FILTERS.map((specialty) => {
      const Icon = icons[specialty.id];
      const selected = selectedSpecialties.includes(specialty.id);

      return (
        <CardFilter
          key={specialty.id}
          icon={<Icon />}
          text={specialty.label}
          selected={selected}
          onPress={() => onToggleSpecialty(specialty.id)}
        />
      );
    })}
  </SectionFilterScroll>
);
