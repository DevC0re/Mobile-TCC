import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Inputstyle, LabelInput } from "./style";

interface IProps {
	textplace: string;
	label: string;
	password?: boolean;
	autocapitalize?: "none" | "sentences" | "words" | "characters";
	error?: boolean;
}

export const Input = ({
	label,
	textplace,
	password,
	autocapitalize,
	error,
}: IProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const { isSmall } = useBreakpoint();

	return (
		<View>
			<LabelInput isSmall={isSmall}>{label}</LabelInput>
			<Inputstyle Erro={false}>
				<TextInput
					placeholder={textplace}
					secureTextEntry={password ? !isPasswordVisible : false}
					autoCapitalize={autocapitalize}
				/>
				{password && (
					<Pressable onPress={togglePasswordVisibility}>
						{isPasswordVisible ? <Eye /> : <EyeOff />}
					</Pressable>
				)}
			</Inputstyle>
		</View>
	);
};
