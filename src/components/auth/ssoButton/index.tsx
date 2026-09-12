import { Pressable, Text } from "react-native";
import { ButtonStyle, TextButton } from "./style";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { GoogleLogo } from "../../logoGoogle";

export const SsoButton = () => {
	const { isSmall } = useBreakpoint();

	return (
		<ButtonStyle>
			<GoogleLogo />
			<TextButton isSmall={isSmall}>Faça login com o Google</TextButton>
		</ButtonStyle>
	);
};
