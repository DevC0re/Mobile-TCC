import { Pencil, ShieldPlus, ChevronRight } from "lucide-react-native";
import { theme } from "../../style/theme";
import {
  ActionSlot, BodyText, CardRow, CaptionText, FlexContent,
  InsuranceCardRoot, NoteCard, Subheading,
} from "./style";

export const InsuranceNotice = () => (
  <NoteCard>
    <ShieldPlus size={28} color={theme.colors.teal} />
    <FlexContent>
      <Subheading>Encontre atendimento pelo seu convênio</Subheading>
      <BodyText>Mantenha seus convênios atualizados.</BodyText>
    </FlexContent>
  </NoteCard>
);

interface InsuranceCardProps {
  name: string;
  onPress: () => void;
  onEdit?: () => void;
}

export const InsuranceCard = ({ name, onPress, onEdit }: InsuranceCardProps) => (
  <InsuranceCardRoot onPress={onPress} accessibilityRole="button" accessibilityLabel={`Ver hospitais do convênio ${name}`}>
    <ShieldPlus size={25} color={theme.colors.teal} />
    <FlexContent>
      <Subheading>{name}</Subheading>
      <CaptionText>Convênio cadastrado</CaptionText>
    </FlexContent>
    {onEdit ? (
      <ActionSlot
        onPress={(event) => { event.stopPropagation(); onEdit(); }}
        accessibilityRole="button"
        accessibilityLabel={`Editar convênio ${name}`}
      >
        <Pencil size={18} color={theme.colors.navy} />
      </ActionSlot>
    ) : <ChevronRight size={18} color={theme.colors.navy} />}
  </InsuranceCardRoot>
);
