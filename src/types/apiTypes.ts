export interface CadastroUsuarioDTO {
  name: string;
  email: string;
  password: string;
  cpf?: string | null;
}

export interface PerfilUsuarioDTO {
  id: string;
  name: string;
  email: string;
  cpf: string | null;
  role?: "USER" | "ADMIN";
  roles?: "USER" | "ADMIN";
}

export interface HospitalResponseDTO {
  id: string;
  name: string;
  address: string | null;
  endereco?: {
    logradouro?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
  } | null;
  phone: string | null;
  cnpj: string | null;
  email: string | null;
}
