import { Container, Title } from "./style";
import { Input } from "../auth/authInput";

interface FormEditProps {
  name: string;
  email: string;
  onChangeName: (name: string) => void;
  password: string;
  onChangePassword: (password: string) => void;
}

export const FormEdit = ({ name, email, onChangeName, password, onChangePassword }: FormEditProps) => (
  <Container>
    <Title>Dados pessoais</Title>
    <Input textplace="Seu nome" label="Nome" value={name} onChangeText={onChangeName} />
    <Input textplace="Seu e-mail" label="E-mail (não pode ser alterado)" editable={false} value={email} />
    <Input textplace="Digite sua senha" label="Senha a manter ou definir (8 a 16 caracteres)" password value={password} onChangeText={onChangePassword} />
  </Container>
);
