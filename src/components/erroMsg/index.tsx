import { ErrorContainer, ErrorText } from "./style";
import { theme } from "../../style/theme";
import { Info } from "lucide-react-native";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface erroprops {
	errorText?: string;
}
export const MessageErro = ({ errorText }: erroprops) => {
	const { isSmall, isTablet } = useBreakpoint();

	return (
		<ErrorContainer>
			<Info size={20} color={theme.colors.redErro} />
			<ErrorText isSmall={isSmall}>{errorText}</ErrorText>
		</ErrorContainer>
	);
};
