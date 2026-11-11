
import { onlyDigits } from "../types/addressType";

export interface ViaCepResponse {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    erro?: boolean | "true";
}

export async function lookupCep(
    cep: string
): Promise<ViaCepResponse> {
    const digits = onlyDigits(cep);

    if (digits.length !== 8) {
        throw new Error("O CEP deve conter 8 dígitos.");
    }

    const response = await fetch(
        `https://viacep.com.br/ws/${digits}/json/`
    );

    if (!response.ok) {
        throw new Error(
            "Não foi possível consultar o CEP."
        );
    }

    const data = (await response.json()) as ViaCepResponse;

    if (data.erro === true || data.erro === "true") {
        throw new Error("CEP não encontrado.");
    }

    return data;
}
