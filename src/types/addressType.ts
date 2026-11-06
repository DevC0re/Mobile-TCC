
export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface AddressFormData {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
}

export interface AddressPayload extends AddressFormData {
    latitude?: number;
    longitude?: number;
}

export const emptyAddress: AddressFormData = {
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
};

export const onlyDigits = (value: string): string =>
    value.replace(/\D/g, "");

export const formatCep = (value: string): string => {
    const digits = onlyDigits(value).slice(0, 8);

    return digits.length > 5
        ? `${digits.slice(0, 5)}-${digits.slice(5)}`
        : digits;
};
