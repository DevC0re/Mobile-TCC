import { CardHospital } from "../../components/cardHospital";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { BodyText, SectionSpace, WhiteCard } from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { useHospitals } from "../../features/hospitals/HospitalsContext";

export const FavoritesPage = () => {
  const { favorites } = useMedupDemo();
  const { hospitals: allHospitals } = useHospitals();
  const hospitals = allHospitals.filter((hospital) => favorites.includes(hospital.id));

  return (
    <ScreenLayout title="Favoritos" navbar>
      <SectionSpace>
        {hospitals.map((hospital) => (
          <CardHospital key={hospital.id} hospital={hospital} />
        ))}
        {hospitals.length === 0 && (
          <WhiteCard>
            <BodyText>Você ainda não tem hospitais favoritos. Abra o perfil de um hospital e toque no coração para adicioná-lo.</BodyText>
          </WhiteCard>
        )}
      </SectionSpace>
    </ScreenLayout>
  );
};
