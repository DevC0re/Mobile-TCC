import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { listarHospitais } from "../../services/hospitalService";
import { getApiErrorMessage } from "../../services/apiError";
import type { HospitalInfo } from "../medupDemo/data";

type Context = {
  hospitals: HospitalInfo[];
  loading: boolean;
  error: string;
  refresh: () => Promise<void>;
  findHospital: (id: string) => HospitalInfo | undefined;
};
const HospitalsContext = createContext<Context | null>(null);
export function HospitalsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [hospitals, setHospitals] = useState<HospitalInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const refresh = useCallback(async () => {
    if (!user) { setHospitals([]); return; }
    setLoading(true);
    setError("");
    try { setHospitals(await listarHospitais()); }
    catch (e) { setHospitals([]); setError(getApiErrorMessage(e)); }
    finally { setLoading(false); }
  }, [user?.id]);
  useEffect(() => { void refresh(); }, [refresh]);
  return <HospitalsContext.Provider value={{
    hospitals, loading, error, refresh,
    findHospital: (id) => hospitals.find((hospital) => hospital.id === id),
  }}>{children}</HospitalsContext.Provider>;
}
export function useHospitals() {
  const context = useContext(HospitalsContext);
  if (!context) throw new Error("useHospitals requer HospitalsProvider");
  return context;
}
