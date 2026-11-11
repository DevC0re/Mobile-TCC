import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Keyboard, ScrollView } from "react-native";
import { Header } from "../../components/header";
import { InputSearch } from "../../components/input";
import { NavBar } from "../../components/navBar";
import { SectionFilter } from "../../components/sectionFilter";
import { CardHospital } from "../../components/cardHospital";
import { BodyText, Subheading } from "../../components/medupFlow/style";
import { HOSPITALS } from "../../features/medupDemo/data";
import {
  filterHospitals,
  SPECIALTY_FILTERS,
  type SpecialtyFilterId,
} from "../../features/medupDemo/hospitalSearch";
import type { NavigationType } from "../../types/navigationType";
import {
  Main,
  FilterTitle,
  FilterHelp,
  ResultsHeader,
  ClearButton,
  ClearButtonText,
  EmptyResults,
} from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const SearchPage = () => {
  const navigation = useNavigation<Nav>();
  const [search, setSearch] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] =
    useState<SpecialtyFilterId[]>([]);

  const filtered = useMemo(
    () => filterHospitals(HOSPITALS, search, selectedSpecialties),
    [search, selectedSpecialties],
  );

  const toggleSpecialty = (id: SpecialtyFilterId) => {
    Keyboard.dismiss();
    setSelectedSpecialties((current) =>
      current.includes(id)
        ? current.filter((selected) => selected !== id)
        : [...current, id],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedSpecialties([]);
    Keyboard.dismiss();
  };

  const hasActiveFilters = search.trim().length > 0 || selectedSpecialties.length > 0;

  return (
    <Main>
      <Header title="Pesquisar" />
      <ScrollView
        style={{ flex: 1, backgroundColor: "#C8D9E6" }}
        contentContainerStyle={{ padding: 14, gap: 15, paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <InputSearch
          value={search}
          onChangeText={setSearch}
          placeholder="Hospital ou especialidade"
        />

        <FilterTitle>Filtrar por especialidade</FilterTitle>
        <FilterHelp>
          {selectedSpecialties.length > 0
            ? `Selecionadas: ${SPECIALTY_FILTERS.filter((item) => selectedSpecialties.includes(item.id))
                .map((item) => item.label)
                .join(", ")}`
            : "Toque nos cards para selecionar uma ou mais especialidades."}
        </FilterHelp>
        <SectionFilter
          selectedSpecialties={selectedSpecialties}
          onToggleSpecialty={toggleSpecialty}
        />

        <ResultsHeader>
          <Subheading>
            Hospitais encontrados ({filtered.length})
          </Subheading>
          {hasActiveFilters && (
            <ClearButton
              onPress={clearFilters}
              accessibilityRole="button"
              accessibilityLabel="Limpar pesquisa e especialidades"
            >
              <ClearButtonText>Limpar filtros</ClearButtonText>
            </ClearButton>
          )}
        </ResultsHeader>

        {filtered.map((hospital) => (
          <CardHospital
            key={hospital.id}
            hospital={hospital}
            onPress={() => {
              Keyboard.dismiss();
              navigation.navigate("HospitalProfile", { hospitalId: hospital.id });
            }}
          />
        ))}

        {filtered.length === 0 && (
          <EmptyResults>
            <BodyText>
              Nenhum hospital encontrado com essa pesquisa e essas especialidades.
              Tente outro termo ou limpe os filtros.
            </BodyText>
          </EmptyResults>
        )}
      </ScrollView>
      <NavBar activeSearchPage />
    </Main>
  );
};
