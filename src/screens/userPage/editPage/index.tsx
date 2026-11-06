import { useEffect, useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from "react-native";

import { Main } from "./style";
import { Header } from "../../../components/header";
import { NavBar } from "../../../components/navBar";
import { EditProfilePhoto } from "../../../components/EditProfilePhoto";
import { FormEdit } from "../../../components/formEditPage";
import { Button } from "../../../components/button";
import { theme } from "../../../style/theme";

export const EditPage = () => {
	const [keyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const show = Keyboard.addListener("keyboardDidShow", () =>
			setKeyboardVisible(true),
		);

		const hide = Keyboard.addListener("keyboardDidHide", () =>
			setKeyboardVisible(false),
		);

		return () => {
			show.remove();
			hide.remove();
		};
	}, []);

	return (
		<Main>
			<KeyboardAvoidingView
				style={{ flex: 1, backgroundColor: theme.colors.skyBlue }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Header title="Editar perfil" />

				<ScrollView
					style={{ flex: 1 }}
					contentContainerStyle={{
						flexGrow: 1,
						padding: 20,
						paddingBottom: 30,
						gap: 20,
						justifyContent: keyboardVisible ? "flex-start" : "space-between",
					}}
					keyboardShouldPersistTaps="handled"
					keyboardDismissMode="on-drag"
					showsVerticalScrollIndicator={false}
				>
					<EditProfilePhoto />

					<FormEdit />

					<Button title="Salvar alterações" />
				</ScrollView>

				{!keyboardVisible && <NavBar activeUserPage={true} />}
			</KeyboardAvoidingView>
		</Main>
	);
};
