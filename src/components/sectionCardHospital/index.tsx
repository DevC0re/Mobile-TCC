import { CardHospital } from "../cardHospital";
import { SectionCard } from "./style";
import { HOSPITALS } from "../../features/medupDemo/data";

export const SectionCardHospital = () => (
  <SectionCard>
    {HOSPITALS.map((hospital) => (
      <CardHospital key={hospital.id} hospital={hospital} />
    ))}
  </SectionCard>
);
