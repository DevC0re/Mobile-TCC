import type { HospitalReview } from "./data";

export type DemoRole = "USER" | "ADMIN";

// Apenas demonstração local. A autorização real deve ser validada pelo backend.
export const resolveDemoRole = (development: boolean, requested?: string): DemoRole =>
  development && requested === "ADMIN" ? "ADMIN" : "USER";

export const removeDemoReview = (reviews: HospitalReview[], id: string, role: DemoRole) =>
  role === "ADMIN" ? reviews.filter((review) => review.id !== id) : reviews;
