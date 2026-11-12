import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import {
  SAMPLE_REVIEWS,
  type HospitalId,
  type HospitalReview,
  type InsuranceId,
} from "./data";

import { removeDemoReview, type DemoRole } from "./reviewModeration";

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
  // Favoritos e convênios ainda são locais: não existe endpoint por usuário no back-end.
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<HospitalId[]>([]);
  const [insurances, setInsurances] = useState<InsuranceId[]>([]);
  const [reviews, setReviews] = useState<HospitalReview[]>(SAMPLE_REVIEWS);

  const role: DemoRole = user?.role === "ADMIN" ? "ADMIN" : "USER";

  // Não misturar escolhas de contas diferentes ao trocar de usuário.
  useEffect(() => {
    setFavorites([]);
    setInsurances([]);
    setReviews([]);
  }, [user?.id]);

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
