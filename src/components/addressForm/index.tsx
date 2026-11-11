
import { AddressField } from "../addressField";
import type { AddressFormData } from "../../types/addressType";

import {
    FieldRow,
    Feedback,
    FormContainer,
    SmallColumn,
    UfColumn,
    WideColumn,
} from "./style";

interface AddressFormProps {
    address: AddressFormData;
    onChange: (
        field: keyof AddressFormData,
        value: string
    ) => void;
    cepLoading: boolean;
    cepError: string | null;
    onFieldFocus?: (field: keyof AddressFormData) => void;
    disabled?: boolean;
}

export const AddressForm = ({
                                address,
                                onChange,
                                cepLoading,
                                cepError,
                                onFieldFocus,
                                disabled = false,
                            }: AddressFormProps) => {
    return (
        <FormContainer>
            <AddressField
                label="CEP"
                placeholder="00000-000"
                value={address.cep}
                onChangeText={(value) => onChange("cep", value)}
                keyboardType="number-pad"
                maxLength={9}
                autoComplete="postal-code"
                editable={!disabled}
                returnKeyType="done"
            />

            {cepLoading && (
                <Feedback>Consultando CEP...</Feedback>
            )}

            {!!cepError && (
                <Feedback>{cepError}</Feedback>
            )}

            <AddressField
                label="Rua"
                placeholder="Nome da rua"
                value={address.rua}
                onChangeText={(value) => onChange("rua", value)}
                editable={!disabled}
                autoCapitalize="words"
            />

            <FieldRow>
                <SmallColumn>
                    <AddressField
                        label="Número"
                        placeholder="123"
                        value={address.numero}
                        onChangeText={(value) =>
                            onChange("numero", value)
                        }
                        onFocus={() => onFieldFocus?.("numero")}
                        keyboardType="number-pad"
                        returnKeyType="done"
                        editable={!disabled}
                    />
                </SmallColumn>

                <WideColumn>
                    <AddressField
                        label="Complemento"
                        placeholder="Opcional"
                        value={address.complemento}
                        onChangeText={(value) =>
                            onChange("complemento", value)
                        }
                        onFocus={() =>
                            onFieldFocus?.("complemento")
                        }
                        editable={!disabled}
                    />
                </WideColumn>
            </FieldRow>

            <AddressField
                label="Bairro"
                placeholder="Seu bairro"
                value={address.bairro}
                onChangeText={(value) =>
                    onChange("bairro", value)
                }
                onFocus={() => onFieldFocus?.("bairro")}
                editable={!disabled}
            />

            <FieldRow>
                <WideColumn>
                    <AddressField
                        label="Cidade"
                        placeholder="São Paulo"
                        value={address.cidade}
                        onChangeText={(value) =>
                            onChange("cidade", value)
                        }
                        onFocus={() => onFieldFocus?.("cidade")}
                        editable={!disabled}
                    />
                </WideColumn>

                <UfColumn>
                    <AddressField
                        label="UF"
                        placeholder="SP"
                        value={address.uf}
                        onChangeText={(value) =>
                            onChange("uf", value)
                        }
                        onFocus={() => onFieldFocus?.("uf")}
                        maxLength={2}
                        autoCapitalize="characters"
                        editable={!disabled}
                    />
                </UfColumn>
            </FieldRow>
        </FormContainer>
    );
};
