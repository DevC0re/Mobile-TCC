import { View } from "react-native";
import { Container, SubTitle, Title } from "./style";
import { Input } from "../auth/authInput";

export const FormEdit = () => {
	return (
		<Container>
			<Title>Dados pessoais</Title>
			<Input textplace={"Nome:"} label={"Nome"} />
			<Input textplace={"Email:"} label={"Email"} />
			<Title>Alterar senha</Title>
			<SubTitle>Preencha apenas se quiser trocar sua senha.</SubTitle>
			<Input textplace={"••••••••"} label={"Senha atual"} password />
			<Input textplace={"••••••••"} label={"Nova senha"} password />
			<Input textplace={"••••••••"} label={"Confirmar nova senha"} password />
		</Container>
	);
};
