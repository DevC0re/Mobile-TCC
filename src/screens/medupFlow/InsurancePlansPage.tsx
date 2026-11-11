import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChevronRight, Plus, X } from "lucide-react-native";
import { Alert, Modal, Pressable, ScrollView, View } from "react-native";
import { Button } from "../../components/button";
import { InsuranceCard, InsuranceNotice } from "../../components/medupFlow/InsuranceWidgets";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { BodyText, CaptionText, Heading, SectionSpace, Subheading } from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { getInsurance, INSURANCE_OPTIONS, type InsuranceId } from "../../features/medupDemo/data";
import { theme } from "../../style/theme";
import type { NavigationType } from "../../types/navigationType";
import { BottomSheet, HeaderRow, IconPressable, SearchBox, SheetRow } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const InsurancePlansPage = () => {
  const navigation = useNavigation<Nav>();
  const { insurances, addInsurance, removeInsurance } = useMedupDemo();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const options = useMemo(() => INSURANCE_OPTIONS.filter((option) =>
    option.name.toLocaleLowerCase("pt-BR").includes(query.trim().toLocaleLowerCase("pt-BR"))), [query]);

  const selectInsurance = (id: InsuranceId) => {
    addInsurance(id);
    setOpen(false);
    setQuery("");
  };
  const confirmRemove = (id: InsuranceId) => {
    Alert.alert("Remover convênio?", `Deseja remover ${getInsurance(id).name} dos seus convênios?`, [
      { text: "Cancelar", style: "cancel" },
      { text: "Remover", style: "destructive", onPress: () => removeInsurance(id) },
    ]);
  };

  return (
    <>
      <ScreenLayout title="Meus convênios" navbar>
        <CaptionText>Gerencie seus planos de saúde.</CaptionText>
        <InsuranceNotice />
        <SectionSpace>
          {insurances.map((id) => (
            <InsuranceCard
              key={id}
              name={getInsurance(id).name}
              onPress={() => navigation.navigate("InsuranceHospitals", { insuranceId: id })}
              onEdit={() => confirmRemove(id)}
            />
          ))}
          {insurances.length === 0 && <BodyText>Você ainda não cadastrou nenhum convênio.</BodyText>}
        </SectionSpace>
        <Button title="Adicionar convênio" outlined icon={Plus} onPress={() => setOpen(true)} />
      </ScreenLayout>

      <Modal visible={open} transparent animationType="slide" onRequestClose={() => setOpen(false)}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Pressable
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(23, 44, 61, 0.45)" }}
            onPress={() => setOpen(false)}
            accessibilityLabel="Fechar seleção de convênios"
          />
          <BottomSheet>
            <HeaderRow>
              <Heading>Adicionar convênio</Heading>
              <IconPressable onPress={() => setOpen(false)} accessibilityLabel="Fechar">
                <X size={22} color={theme.colors.navy} />
              </IconPressable>
            </HeaderRow>
            <SearchBox
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar convênio"
              placeholderTextColor={theme.colors.dustyGray}
              accessibilityLabel="Buscar convênio"
              autoCapitalize="none"
            />
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
              {options.map((option) => (
                <SheetRow key={option.id} onPress={() => selectInsurance(option.id)}>
                  <Subheading>{option.name}</Subheading>
                  <ChevronRight size={20} color={theme.colors.navy} />
                </SheetRow>
              ))}
              {options.length === 0 && <BodyText>Nenhum convênio encontrado.</BodyText>}
            </ScrollView>
          </BottomSheet>
        </View>
      </Modal>
    </>
  );
};
