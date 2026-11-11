/**
 * Especialidades disponíveis no filtro de pesquisa.
 * `specialty` é o nome cadastrado em HospitalInfo.specialties.
 * `label` é a forma apresentada no card ao usuário.
 * Novas especialidades do backend podem ser incluídas aqui.
 */
export const SPECIALTY_FILTERS = [
  { id: "cardiologia", label: "Cardiologista", specialty: "Cardiologia" },
  { id: "dermatologia", label: "Dermatologista", specialty: "Dermatologia" },
  { id: "pediatria", label: "Pediatra", specialty: "Pediatria" },
  { id: "nutricao", label: "Nutricionista", specialty: "Nutrição" },
  { id: "neurologia", label: "Neurologista", specialty: "Neurologia" },
  { id: "oftalmologia", label: "Oftalmologista", specialty: "Oftalmologia" },
  { id: "ortopedia", label: "Ortopedista", specialty: "Ortopedia" },
  { id: "clinico-geral", label: "Clínico geral", specialty: "Clínico geral" },
  { id: "geriatria", label: "Geriatria", specialty: "Geriatria" },
] as const;

export type SpecialtyFilterId = (typeof SPECIALTY_FILTERS)[number]["id"];

export interface SearchableHospital {
  name: string;
  city?: string;
  address?: string;
  specialties: readonly string[];
}

/** Busca independente de maiúsculas, acentos ou espaços repetidos. */
export const normalizeSearchText = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/\s+/g, " ")
    .trim();

const matchesSpecialty = (
  hospital: SearchableHospital,
  specialtyId: SpecialtyFilterId,
): boolean => {
  const filter = SPECIALTY_FILTERS.find((item) => item.id === specialtyId);
  if (!filter) return false;

  const expectedName = normalizeSearchText(filter.specialty);
  return hospital.specialties.some(
    (specialty) => normalizeSearchText(specialty) === expectedName,
  );
};

const matchesQuery = (hospital: SearchableHospital, query: string): boolean => {
  if (!query) return true;

  // Além de "Cardiologia", o texto "cardiologista" também deve funcionar.
  const displayNames = SPECIALTY_FILTERS.filter((item) =>
    matchesSpecialty(hospital, item.id),
  ).map((item) => item.label);

  const terms = [
    hospital.name,
    hospital.city ?? "",
    hospital.address ?? "",
    ...hospital.specialties,
    ...displayNames,
  ];

  return terms.some((term) => normalizeSearchText(term).includes(query));
};

/**
 * Aplica a busca digitada E os filtros selecionados.
 * Entre especialidades selecionadas, usa OU (ex.: cardiologia OU pediatria).
 */
export const filterHospitals = <T extends SearchableHospital>(
  hospitals: readonly T[],
  search: string,
  selectedSpecialties: readonly SpecialtyFilterId[] = [],
): T[] => {
  const query = normalizeSearchText(search);

  return hospitals.filter(
    (hospital) =>
      matchesQuery(hospital, query) &&
      (selectedSpecialties.length === 0 ||
        selectedSpecialties.some((id) => matchesSpecialty(hospital, id))),
  );
};
