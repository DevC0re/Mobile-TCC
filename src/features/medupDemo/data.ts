import type { ImageSourcePropType } from "react-native";
import demoHospitalImage from "../../assets/img.png";

export type HospitalId = "santa-clara" | "vita-saude" | "sao-lucas" | "bem-viver";

export interface HospitalInfo {
  id: HospitalId;
  name: string;
  city: string;
  address: string;
  rating: number;
  reviewCount: number;
  /** Dados para a tag do hospital. null = informação indisponível. */
  openNow?: boolean | null;
  ownership?: "publico" | "privado" | null;
  image: ImageSourcePropType;
  description: string;
  specialties: string[];
  insurances: string[];
  phone?: string;
  vaccines?: string[];
}

// ATENÇÃO: todos os hospitais abaixo são dados fictícios de demonstração.
// openNow é um exemplo estático para testar as tags; NÃO é consulta em tempo real.
// Quando conectar ao backend, substitua openNow e ownership por dados oficiais atualizados.
export const HOSPITALS: HospitalInfo[] = [
  {
    vaccines: ["Influenza", "COVID-19", "Hepatite B"],
    id: "santa-clara",
    name: "Hospital Santa Clara",
    city: "São Paulo, SP",
    address: "São Paulo, SP",
    rating: 4.5,
    reviewCount: 1284,
    openNow: true,
    ownership: "privado",
    image: demoHospitalImage,
    description: "Hospital geral com atendimento de alta complexidade.",
    specialties: ["Clínico geral", "Cardiologia", "Ortopedia", "Pediatria", "Outras"],
    insurances: ["Amil", "Bradesco Saúde", "SulAmérica", "Unimed"],
  },
  {
    id: "vita-saude",
    name: "Hospital Vita Saúde",
    city: "São Paulo, SP",
    address: "São Paulo, SP",
    rating: 4.4,
    reviewCount: 856,
    openNow: false,
    ownership: "privado",
    image: demoHospitalImage,
    description: "Hospital com diversas especialidades médicas.",
    specialties: ["Clínico geral", "Dermatologia", "Cardiologia"],
    insurances: ["Amil", "Porto Saúde"],
  },
  {
    id: "sao-lucas",
    name: "Hospital São Lucas",
    city: "São Caetano do Sul, SP",
    address: "São Caetano do Sul, SP",
    rating: 4.3,
    reviewCount: 721,
    openNow: true,
    ownership: "publico",
    image: demoHospitalImage,
    description: "Hospital geral com equipe multidisciplinar.",
    specialties: ["Clínico geral", "Ortopedia", "Neurologia"],
    insurances: ["Amil", "Bradesco Saúde", "MedSênior"],
  },
  {
    id: "bem-viver",
    name: "Hospital Bem Viver",
    city: "Santo André, SP",
    address: "Santo André, SP",
    rating: 4.2,
    reviewCount: 609,
    openNow: false,
    ownership: "publico",
    image: demoHospitalImage,
    description: "Hospital com foco em atendimento humanizado.",
    specialties: ["Clínico geral", "Pediatria", "Geriatria"],
    insurances: ["Amil", "Porto Saúde"],
  },
];

export const getHospital = (id: string) =>
  HOSPITALS.find((hospital) => hospital.id === id) ?? HOSPITALS[0];

export const INSURANCE_OPTIONS = [
  { id: "amil", name: "Amil" },
  { id: "medsenior", name: "MedSênior" },
  { id: "bradesco", name: "Bradesco Saúde" },
  { id: "porto", name: "Porto Saúde" },
  { id: "unimed", name: "Unimed" },
  { id: "sulamerica", name: "SulAmérica" },
] as const;

export type InsuranceId = (typeof INSURANCE_OPTIONS)[number]["id"];
export const getInsurance = (id: string) =>
  INSURANCE_OPTIONS.find((insurance) => insurance.id === id) ?? INSURANCE_OPTIONS[0];

export const CRITERIA = ["Atendimento", "Estrutura", "Limpeza", "Organização"] as const;
export type Criterion = (typeof CRITERIA)[number];
export type RatingScores = Record<Criterion, number>;

export interface HospitalReview {
  id: string;
  hospitalId: HospitalId;
  author: string;
  date: string;
  scores: RatingScores;
  overall: number;
  comment: string;
  photoUri?: string;
  photo?: ImageSourcePropType;
}

export const SAMPLE_REVIEWS: HospitalReview[] = [
  {
    photo: demoHospitalImage,
    id: "ex1",
    hospitalId: "santa-clara",
    author: "Maria Aparecida",
    date: "12 de jan. de 2025",
    overall: 5,
    scores: { Atendimento: 5, Estrutura: 5, Limpeza: 5, Organização: 5 },
    comment: "Excelente atendimento! A equipe foi muito atenciosa e prestativa. O hospital estava limpo e organizado, e recebi todas as orientações de que precisava.",
  },
  {
    id: "ex2",
    hospitalId: "santa-clara",
    author: "José Carlos",
    date: "5 de jan. de 2025",
    overall: 4,
    scores: { Atendimento: 5, Estrutura: 4, Limpeza: 4, Organização: 5 },
    comment: "Estrutura muito boa e atendimento ágil. Recomendo.",
  },
  {
    id: "ex3",
    hospitalId: "santa-clara",
    author: "Ana Beatriz",
    date: "28 de dez. de 2024",
    overall: 5,
    scores: { Atendimento: 5, Estrutura: 5, Limpeza: 5, Organização: 5 },
    comment: "Hospital organizado, limpo e com profissionais competentes.",
  },
];

export const averageScore = (scores: RatingScores) =>
  CRITERIA.reduce((sum, criterion) => sum + scores[criterion], 0) / CRITERIA.length;

// Os totais fictícios incluem avaliações antigas não listadas nesta demonstração.
export const getHospitalWithReviews = (hospital: HospitalInfo, reviews: HospitalReview[]): HospitalInfo => {
  const initial = SAMPLE_REVIEWS.filter((review) => review.hospitalId === hospital.id);
  const current = reviews.filter((review) => review.hospitalId === hospital.id);
  const reviewCount = Math.max(0, hospital.reviewCount - initial.length + current.length);
  const total = hospital.rating * hospital.reviewCount
    - initial.reduce((sum, review) => sum + review.overall, 0)
    + current.reduce((sum, review) => sum + review.overall, 0);
  return { ...hospital, reviewCount, rating: reviewCount ? Math.max(0, Math.min(5, total / reviewCount)) : 0 };
};
