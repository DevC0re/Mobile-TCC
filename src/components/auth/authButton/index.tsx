import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Buttonregister, TextButton } from "./style";

interface PropsButton {
	text: string;
	disabled: boolean;
	onPress?: () => void;
}

export const ButtonAuth = ({ text, onPress, disabled }: PropsButton) => {
	const { isSmall } = useBreakpoint();

	return (
		<Buttonregister disabled={disabled} onPress={onPress}>
			<TextButton isSmall={isSmall}>{text}</TextButton>
		</Buttonregister>
	);
};
