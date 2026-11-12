import { useCallback, useState } from "react";
import { Alert, ActivityIndicator, ScrollView, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Plus } from "lucide-react-native";
import { Conteiner, Description, Main, SetionCard, TextHelper } from "./style";
import { Header } from "../../../components/header";
import { CardAddress } from "../../../components/cardAddress";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navBar";
import type { NavigationType } from "../../../types/navigationType";
import { listarEnderecos, excluirEndereco, definirEnderecoPrincipal, type EnderecoDTO } from "../../../services/addressService";
import { getApiErrorMessage } from "../../../services/apiError";

type Nav = NativeStackNavigationProp<NavigationType>;
export const AddressPage = () => {
  const navigation = useNavigation<Nav>();
  const [addresses, setAddresses] = useState<EnderecoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try { setAddresses(await listarEnderecos()); }
    catch (e) { setError(getApiErrorMessage(e)); }
    finally { setLoading(false); }
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));
  const remove = (item: EnderecoDTO) => {
    Alert.alert("Excluir endereço", `Deseja excluir ${item.apelido || item.logradouro}?`, [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", style: "destructive", onPress: async () => {
        try { await excluirEndereco(item.id); await load(); }
        catch (e) { Alert.alert("Erro", getApiErrorMessage(e)); }
      } },
    ]);
  };
  const setPrincipal = async (id: string) => {
    try { await definirEnderecoPrincipal(id); await load(); }
    catch (e) { Alert.alert("Erro", getApiErrorMessage(e)); }
  };
  return (
    <Main>
      <Header title="Meus endereços" />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <Conteiner>
          <Description>Gerencie seus locais salvos.</Description>
          {loading && <ActivityIndicator accessibilityLabel="Carregando endereços" />}
          {!!error && <Text>{error}</Text>}
          {!loading && !error && addresses.length === 0 && <Text>Você ainda não possui endereços cadastrados.</Text>}
          <SetionCard>
            {addresses.map((item) => (
              <CardAddress key={item.id}
                title={item.apelido || (item.principal ? "Principal" : "Endereço")}
                address={`${item.logradouro}, ${item.numero}`}
                city={item.cidade} state={item.estado} isPrincipal={item.principal}
                onPressEdit={() => navigation.navigate("AddressPageAdd", { addressId: item.id })}
                onPressDelete={() => remove(item)}
                onPressPrincipal={!item.principal ? () => setPrincipal(item.id) : undefined}
              />
            ))}
          </SetionCard>
          <Button title="Adicionar endereço" outlined icon={Plus} onPress={() => navigation.navigate("AddressPageAdd")} />
          <TextHelper>Use seus endereços para encontrar hospitais próximos.</TextHelper>
        </Conteiner>
      </ScrollView>
      <NavBar activeUserPage />
    </Main>
  );
};
