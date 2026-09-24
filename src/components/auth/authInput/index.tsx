import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { InputField, Inputstyle, LabelInput } from "./style";

interface IProps {
	textplace: string;
	label: string;
	password?: boolean;
	autocapitalize?: "none" | "sentences" | "words" | "characters";
	error?: boolean;
	value?: string;
	onChangeText?: (text: string) => void;
}

export const Input = ({
	label,
	textplace,
	password,
	autocapitalize,
	error,
	value,
	onChangeText,
}: IProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const { isSmall } = useBreakpoint();

	return (
		<View>
			<LabelInput isSmall={isSmall}>{label}</LabelInput>
			<Inputstyle Erro={error}>
				<InputField
					placeholder={textplace}
					secureTextEntry={password ? !isPasswordVisible : false}
					autoCapitalize={autocapitalize}
					value={value}
					onChangeText={onChangeText}
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
