import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { GoogleLogo } from "../../logoGoogle";
import { ButtonStyle, TextButton } from "./style";

export const SsoButton = () => {
	const { isSmall } = useBreakpoint();

	return (
		<ButtonStyle>
			<GoogleLogo />
			<TextButton isSmall={isSmall}>Faça login com o Google</TextButton>
		</ButtonStyle>
	);
};
