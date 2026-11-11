import React, { createContext, useContext, useMemo, useState } from "react";
import {
  SAMPLE_REVIEWS,
  type HospitalId,
  type HospitalReview,
  type InsuranceId,
} from "./data";

import { removeDemoReview, resolveDemoRole, type DemoRole } from "./reviewModeration";

interface DemoContextValue {
  role: DemoRole;
  removeReview: (id: string) => boolean;
  favorites: HospitalId[];
  insurances: InsuranceId[];
  reviews: HospitalReview[];
  toggleFavorite: (id: HospitalId) => void;
  addInsurance: (id: InsuranceId) => void;
  removeInsurance: (id: InsuranceId) => void;
  addReview: (review: HospitalReview) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export const DemoProvider = ({ children }: { children: React.ReactNode }) => {
  // Dados de demonstração: substitua por dados retornados pela API quando integrada.
  const [favorites, setFavorites] = useState<HospitalId[]>([
    "santa-clara", "vita-saude", "sao-lucas", "bem-viver",
  ]);
  const [insurances, setInsurances] = useState<InsuranceId[]>(["bradesco"]);
  const [reviews, setReviews] = useState<HospitalReview[]>(SAMPLE_REVIEWS);

  const role = resolveDemoRole(__DEV__, process.env.EXPO_PUBLIC_DEMO_ROLE);

  const value = useMemo<DemoContextValue>(() => ({
    role,
    removeReview: (id) => {
      if (role !== "ADMIN") return false;
      setReviews((current) => removeDemoReview(current, id, role));
      return true;
    },
    favorites,
    insurances,
    reviews,
    toggleFavorite: (id) => setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]),
    addInsurance: (id) => setInsurances((current) =>
      current.includes(id) ? current : [...current, id]),
    removeInsurance: (id) => setInsurances((current) => current.filter((item) => item !== id)),
    addReview: (review) => setReviews((current) => [review, ...current]),
  }), [favorites, insurances, reviews, role]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};

export const useMedupDemo = () => {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useMedupDemo precisa estar dentro de DemoProvider");
  return context;
};
