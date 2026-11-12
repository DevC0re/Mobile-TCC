import { api } from "../api/api";
import type { AddressPayload } from "../types/addressType";

export interface EnderecoDTO {
  id: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  apelido?: string | null;
  principal: boolean;
}

const endpoint = "/usuario/me/enderecos";
const toRequest = (address: AddressPayload) => ({
  cep: address.cep,
  logradouro: address.rua,
  numero: address.numero,
  complemento: address.complemento || null,
  bairro: address.bairro,
  cidade: address.cidade,
  estado: address.uf,
  latitude: address.latitude ?? null,
  longitude: address.longitude ?? null,
});

export const listarEnderecos = async (): Promise<EnderecoDTO[]> =>
  (await api.get<EnderecoDTO[]>(endpoint)).data;

export const buscarEndereco = async (id: string): Promise<EnderecoDTO> =>
  (await api.get<EnderecoDTO>(`${endpoint}/${id}`)).data;

export const saveAddressToApi = async (address: AddressPayload): Promise<void> => {
  await api.post(endpoint, toRequest(address));
};

export const atualizarEndereco = async (id: string, address: AddressPayload): Promise<void> => {
  await api.put(`${endpoint}/${id}`, toRequest(address));
};

export const excluirEndereco = async (id: string): Promise<void> => {
  await api.delete(`${endpoint}/${id}`);
};

export const definirEnderecoPrincipal = async (id: string): Promise<void> => {
  await api.patch(`${endpoint}/${id}/principal`);
};
