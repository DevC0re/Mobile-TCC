import { Search } from "lucide-react-native";
import { theme } from "../../style/theme";
import { InputContainer, StyledInput } from "./style";

interface InputSearchProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

export const InputSearch = ({
  value,
  onChangeText,
  placeholder = "Digite aqui para pesquisar",
}: InputSearchProps) => (
  <InputContainer>
    <Search size={21} color={theme.colors.navy} />
    <StyledInput
      placeholder={placeholder}
      placeholderTextColor={theme.colors.Neutral600}
      value={value}
      onChangeText={onChangeText}
      returnKeyType="search"
      autoCorrect={false}
      autoCapitalize="none"
      accessibilityLabel="Pesquisar hospitais e especialidades"
    />
  </InputContainer>
);
