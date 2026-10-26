import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";
import { InputContainer, StyledInput } from "./style";

export const InputSearch = () => {
	return (
		<InputContainer>
			<Search />
			<StyledInput placeholder="Digite aqui para pesquisar" />
		</InputContainer>
	);
};
