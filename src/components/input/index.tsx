import { TextInput, View } from "react-native";
import { InputContainer, StyledInput } from "./style";
import { Search } from "lucide-react-native";

export const InputSearch = () => {
	return (
		<InputContainer>
			<Search />
			<StyledInput placeholder="Digite aqui para pesquisar" />
		</InputContainer>
	);
};
