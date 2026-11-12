
import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

import * as Location from "expo-location";

import { Header } from "../../../components/header";
import { NavBar } from "../../../components/navBar";
import { Button } from "../../../components/button";

import { AddressMapPreview } from
        "../../../components/addressMapPreview";

import { AddressForm } from
        "../../../components/addressForm";

import { lookupCep } from "../../../services/viaCep";


import {
    emptyAddress,
    formatCep,
    onlyDigits,
    type AddressFormData,
    type AddressPayload,
    type Coordinates,
} from "../../../types/addressType";

import {
    Main,
    FormTop,
    Hint,
    SubmitArea,
} from "./style";
import { saveAddressToApi, atualizarEndereco, buscarEndereco } from "../../../services/addressService";
import { getApiErrorMessage } from "../../../services/apiError";
import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { NavigationType } from "../../../types/navigationType";
import {theme} from "../../../style/theme";

interface AddressPageProps {
    initialAddress?: Partial<AddressFormData> &
        Partial<Coordinates>;

    onSave?: (address: AddressPayload) => Promise<void>;
}

export const AddressPageAdd = ({
                                initialAddress,
                                onSave,
                            }: AddressPageProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
    const route = useRoute<RouteProp<NavigationType, "AddressPageAdd">>();
    const addressId = route.params?.addressId;

    const [address, setAddress] =
        useState<AddressFormData>({
            ...emptyAddress,
            ...initialAddress,
            cep: formatCep(initialAddress?.cep ?? ""),
        });

    const [coordinates, setCoordinates] =
        useState<Coordinates | null>(
            initialAddress?.latitude != null &&
            initialAddress?.longitude != null
                ? {
                    latitude: initialAddress.latitude,
                    longitude: initialAddress.longitude,
                }
                : null
        );

    const [cepLoading, setCepLoading] = useState(false);
    const [cepError, setCepError] =
        useState<string | null>(null);

    const [locationLoading, setLocationLoading] =
        useState(false);

    const [saving, setSaving] = useState(false);
    const [keyboardVisible, setKeyboardVisible] =
        useState(false);

    useEffect(() => {
      if (!addressId) return;
      let mounted = true;
      buscarEndereco(addressId).then((saved) => {
        if (!mounted) return;
        setAddress({
          cep: formatCep(saved.cep),
          rua: saved.logradouro,
          numero: saved.numero,
          complemento: saved.complemento ?? "",
          bairro: saved.bairro,
          cidade: saved.cidade,
          uf: saved.estado,
        });
        if (saved.latitude != null && saved.longitude != null) {
          setCoordinates({latitude: saved.latitude, longitude: saved.longitude});
        }
      }).catch((error) => Alert.alert("Erro ao carregar endereço", getApiErrorMessage(error)));
      return () => { mounted = false; };
    }, [addressId]);

    const scrollRef = useRef<ScrollView>(null);

    const activeField =
        useRef<keyof AddressFormData | null>(null);

    // 1. Detectar a abertura e o fechamento do teclado
    useEffect(() => {
        const show = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true);

                const field = activeField.current;

                if (
                    field &&
                    ["numero", "complemento", "bairro", "cidade", "uf"]
                        .includes(field)
                ) {
                    scrollRef.current?.scrollToEnd({
                        animated: true,
                    });
                }
            }
        );

        const hide = Keyboard.addListener(
            "keyboardDidHide",
            () => setKeyboardVisible(false)
        );

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    // 2. Atualizar um campo do formulário
    const onChange = useCallback(
        (field: keyof AddressFormData, value: string) => {
            const nextValue =
                field === "cep"
                    ? formatCep(value)
                    : field === "uf"
                        ? value.toUpperCase()
                        : value;

            setAddress((previous) => ({
                ...previous,
                [field]: nextValue,
            }));

            if (field === "cep") {
                setCepError(null);
            }

            // Evita enviar coordenadas de um endereço antigo.
            setCoordinates(null);
        },
        []
    );

    // 3. Buscar o endereço automaticamente pelo CEP
    useEffect(() => {
        const cep = onlyDigits(address.cep);

        if (cep.length !== 8) {
            setCepLoading(false);
            return;
        }

        let cancelled = false;

        const timer = setTimeout(async () => {
            setCepLoading(true);
            setCepError(null);

            try {
                const found = await lookupCep(cep);

                if (cancelled) return;

                setAddress((previous) => ({
                    ...previous,
                    rua: found.logradouro || previous.rua,
                    bairro: found.bairro || previous.bairro,
                    cidade: found.localidade || previous.cidade,
                    uf: found.uf || previous.uf,
                }));
            } catch (error) {
                if (!cancelled) {
                    setCepError(
                        error instanceof Error
                            ? error.message
                            : "Erro ao consultar CEP."
                    );
                }
            } finally {
                if (!cancelled) {
                    setCepLoading(false);
                }
            }
        }, 450);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [address.cep]);

    // 4. Rolar para os campos inferiores
    const handleFieldFocus = (
        field: keyof AddressFormData
    ) => {
        activeField.current = field;

        if (keyboardVisible) {
            scrollRef.current?.scrollToEnd({
                animated: true,
            });
        }
    };

    // 5. Usar a localização atual do usuário
    const useMyLocation = async () => {
        Keyboard.dismiss();
        setLocationLoading(true);

        try {
            const permission =
                await Location.requestForegroundPermissionsAsync();

            if (!permission.granted) {
                Alert.alert(
                    "Localização",
                    "Autorize o acesso à localização do celular."
                );
                return;
            }

            const position =
                await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.Balanced,
                });

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setCoordinates({
                latitude,
                longitude,
            });

            // Converter coordenadas em endereço
            try {
                const addresses =
                    await Location.reverseGeocodeAsync({
                        latitude,
                        longitude,
                    });

                const found = addresses[0];

                if (!found) {
                    Alert.alert(
                        "Localização encontrada",
                        "Confira e preencha os dados manualmente."
                    );
                    return;
                }

                let viaCepAddress:
                    Awaited<ReturnType<typeof lookupCep>> | null =
                    null;

                if (
                    found.postalCode &&
                    onlyDigits(found.postalCode).length === 8
                ) {
                    try {
                        viaCepAddress = await lookupCep(
                            found.postalCode
                        );
                    } catch {
                        // Permite preenchimento manual.
                    }
                }

                setAddress((previous) => ({
                    ...previous,

                    cep:
                        found.postalCode &&
                        onlyDigits(found.postalCode).length === 8
                            ? formatCep(found.postalCode)
                            : previous.cep,

                    rua:
                        viaCepAddress?.logradouro ||
                        found.street ||
                        previous.rua,

                    numero:
                        found.streetNumber || previous.numero,

                    bairro:
                        viaCepAddress?.bairro ||
                        found.district ||
                        previous.bairro,

                    cidade:
                        viaCepAddress?.localidade ||
                        found.city ||
                        previous.cidade,

                    uf:
                        viaCepAddress?.uf ||
                        (found.region?.length === 2
                            ? found.region
                            : previous.uf),
                }));
            } catch {
                Alert.alert(
                    "Localização encontrada",
                    "Não foi possível identificar o endereço completo."
                );
            }
        } catch {
            Alert.alert(
                "Erro",
                "Não foi possível obter sua localização."
            );
        } finally {
            setLocationLoading(false);
        }
    };

    // 6. Validar e enviar o endereço ao backend
    const submit = async () => {
        Keyboard.dismiss();

        const normalized = {
            cep: onlyDigits(address.cep),
            rua: address.rua.trim(),
            numero: address.numero.trim(),
            complemento: address.complemento.trim(),
            bairro: address.bairro.trim(),
            cidade: address.cidade.trim(),
            uf: address.uf.trim().toUpperCase(),
        };

        if (
            normalized.cep.length !== 8 ||
            !normalized.rua ||
            !normalized.numero ||
            !normalized.bairro ||
            !normalized.cidade ||
            !/^[A-Z]{2}$/.test(normalized.uf)
        ) {
            Alert.alert(
                "Dados incompletos",
                "Preencha os dados do endereço corretamente."
            );
            return;
        }

        if (cepLoading) {
            Alert.alert(
                "Aguarde",
                "A consulta do CEP ainda está em andamento."
            );
            return;
        }

        const payload: AddressPayload = {
            ...normalized,
            ...(coordinates
                ? {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                }
                : {}),
        };

        setSaving(true);

        try {
            if (onSave) await onSave(payload);
            else if (addressId) await atualizarEndereco(addressId, payload);
            else await saveAddressToApi(payload);
            Alert.alert("Endereço salvo", "Seu endereço foi salvo com sucesso.");
            navigation.goBack();
        } catch (error) {
            Alert.alert(
                "Não foi possível salvar",
                getApiErrorMessage(error, "Tente novamente.")
            );
        } finally {
            setSaving(false);
        }
    };

    return (
        <Main>
            <Header title={addressId ? "Editar endereço" : "Novo endereço"} />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={
                    Platform.OS === "ios" ? "padding" : undefined
                }
            >
                <ScrollView
                    ref={scrollRef}
                    style={{
                        flex: 1,
                        backgroundColor: theme.colors.skyBlue,
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingHorizontal: 14,
                        paddingTop: 14,
                        paddingBottom: 16,
                        justifyContent: keyboardVisible
                            ? "flex-start"
                            : "space-between",
                    }}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                >
                    <FormTop>
                        <Hint>
                            Mantenha seu endereço atualizado.
                        </Hint>

                        <AddressMapPreview
                            coordinates={coordinates}
                            onUseLocation={useMyLocation}
                            loading={locationLoading}
                        />

                        <AddressForm
                            address={address}
                            onChange={onChange}
                            cepLoading={cepLoading}
                            cepError={cepError}
                            disabled={saving}
                            onFieldFocus={handleFieldFocus}
                        />
                    </FormTop>

                    <SubmitArea>
                        <Button
                            title={
                                saving
                                    ? "Salvando..."
                                    : "Salvar endereço"
                            }
                            onPress={submit}
                            disabled={saving || locationLoading}
                        />
                    </SubmitArea>
                </ScrollView>
            </KeyboardAvoidingView>

            {!keyboardVisible && (
                <NavBar activeUserPage />
            )}
        </Main>
    );
};
