import { api } from "../api/api";
import type { HospitalResponseDTO } from "../types/apiTypes";
import type { HospitalInfo } from "../features/medupDemo/data";
import defaultHospitalImage from "../assets/img.png";

export async function listarHospitais(): Promise<HospitalInfo[]> {
  const { data } = await api.get<HospitalResponseDTO[]>("/hospitais");
  return data.map((item) => {
    const address = item.endereco;
    const street = [address?.logradouro, address?.numero].filter(Boolean).join(", ");
    return {
      id: item.id,
      name: item.name,
      address: street || item.address || "Endereço não informado",
      city: [address?.cidade, address?.estado].filter(Boolean).join(" - "),
      phone: item.phone || undefined,
      image: defaultHospitalImage, // API não fornece imagem
      rating: 0, // API de hospital não informa nota média
      reviewCount: 0,
      openNow: null, // Não afirmar aberto/fechado sem fonte confiável
      ownership: null,
      description: "O hospital ainda não cadastrou informações adicionais.",
      specialties: [],
      insurances: [],
      vaccines: [],
    };
  });
}
