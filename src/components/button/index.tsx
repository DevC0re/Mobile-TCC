import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react-native";

import { ButtonContainer, ButtonText } from "./style";

interface ButtonProps
	extends Omit<
		ComponentProps<typeof ButtonContainer>,
		"$outlined" | "children"
	> {
	title: string;
	outlined?: boolean;
	icon?: LucideIcon;
}

export const Button = ({
	title,
	outlined = false,
	icon: Icon,
	disabled = false,
	...rest
}: ButtonProps) => {
	const color = outlined ? "#19344E" : "#FFFFFF";

	return (
		<ButtonContainer
			$outlined={outlined}
			disabled={disabled}
			accessibilityRole="button"
			accessibilityLabel={title}
			style={{ opacity: disabled ? 0.5 : 1 }}
			{...rest}
		>
			{Icon && <Icon size={22} color={color} strokeWidth={2.5} />}

			<ButtonText $outlined={outlined}>{title}</ButtonText>
		</ButtonContainer>
	);
};
