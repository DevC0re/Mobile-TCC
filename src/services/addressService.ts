
import type { AddressPayload } from "../types/addressType";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// Ajuste conforme sua rota real no Spring Boot
const ENDPOINT = "/enderecos";

export async function saveAddressToApi(
    address: AddressPayload,
    jwtToken?: string
): Promise<void> {
    if (!API_BASE_URL) {
        throw new Error(
            "Configure EXPO_PUBLIC_API_URL no arquivo .env."
        );
    }

    const response = await fetch(
        `${API_BASE_URL.replace(/\/$/, "")}${ENDPOINT}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(jwtToken
                    ? { Authorization: `Bearer ${jwtToken}` }
                    : {}),
            },
            body: JSON.stringify(address),
        }
    );

    if (!response.ok) {
        const detail = await response.text().catch(() => "");

        throw new Error(
            `Erro ao salvar endereço (${response.status}). ${detail}`
        );
    }
}
