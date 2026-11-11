import { useRoute, type RouteProp } from "@react-navigation/native";
import { CardHospital } from "../../components/cardHospital";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { BodyText, SectionSpace, Subheading } from "../../components/medupFlow/style";
import { getInsurance, HOSPITALS } from "../../features/medupDemo/data";
import type { NavigationType } from "../../types/navigationType";
import { InsuranceBrand, InsuranceBrandText } from "./style";

export const InsuranceHospitalsPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "InsuranceHospitals">>();
  const insurance = getInsurance(params.insuranceId);
  const hospitals = HOSPITALS.filter((hospital) => hospital.insurances.includes(insurance.name));

  return (
    <ScreenLayout title="Perfil do convênio" navbar>
      <InsuranceBrand>
        <InsuranceBrandText style={insurance.id !== "amil" ? { fontSize: 25 } : undefined}>
          {insurance.name}
        </InsuranceBrandText>
      </InsuranceBrand>
      <Subheading>Hospitais que aceitam {insurance.name}</Subheading>
      <SectionSpace>
        {hospitals.map((hospital) => (
          <CardHospital key={hospital.id} hospital={hospital} />
        ))}
        {hospitals.length === 0 && <BodyText>Nenhum hospital disponível nesta demonstração para esse convênio.</BodyText>}
      </SectionSpace>
    </ScreenLayout>
  );
};
