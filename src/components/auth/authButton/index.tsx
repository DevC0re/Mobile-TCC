import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Buttonregister, TextButton } from "./style";

interface PropsButton {
	text: string;
	onPress?: () => void;
}

export const ButtonAuth = ({ text, onPress }: PropsButton) => {
	const { isSmall } = useBreakpoint();

	return (
		<Buttonregister onPress={onPress}>
			<TextButton isSmall={isSmall}>{text}</TextButton>
		</Buttonregister>
	);
};
