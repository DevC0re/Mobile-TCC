import { CardHospital } from "../cardHospital";
import { SectionCard } from "./style";
import { useHospitals } from "../../features/hospitals/HospitalsContext";

export const SectionCardHospital = () => {
  const { hospitals } = useHospitals();
  return <SectionCard>
    {hospitals.map((hospital) => (
      <CardHospital key={hospital.id} hospital={hospital} />
    ))}
  </SectionCard>;
};
