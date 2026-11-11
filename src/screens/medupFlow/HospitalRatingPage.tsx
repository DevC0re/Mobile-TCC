import { useState } from "react";
import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { Button } from "../../components/button";
import { CardHospital } from "../../components/cardHospital";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { StarRating } from "../../components/medupFlow/StarRating";
import { CardRow, SectionSpace, Subheading, WhiteCard } from "../../components/medupFlow/style";
import { CRITERIA, getHospital, type Criterion, type RatingScores } from "../../features/medupDemo/data";
import type { NavigationType } from "../../types/navigationType";
import { CriteriaRow } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;
const emptyScores: RatingScores = { Atendimento: 0, Estrutura: 0, Limpeza: 0, Organização: 0 };

export const HospitalRatingPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "HospitalRating">>();
  const navigation = useNavigation<Nav>();
  const hospital = getHospital(params.hospitalId);
  const [overall, setOverall] = useState(0);
  const [scores, setScores] = useState<RatingScores>(emptyScores);
  const updateScore = (criterion: Criterion, value: number) =>
    setScores((previous) => ({ ...previous, [criterion]: value }));

  const continueReview = () => {
    if (!overall || CRITERIA.some((criterion) => scores[criterion] === 0)) {
      Alert.alert("Avaliação incompleta", "Escolha uma nota geral e uma nota para cada critério.");
      return;
    }
    navigation.navigate("ReviewReport", { hospitalId: hospital.id, scores, overall });
  };

  return (
    <ScreenLayout title="Avaliar hospital">
      <CardHospital hospital={hospital} showFavorite={false} />
      <WhiteCard>
        <Subheading>Como foi sua experiência?</Subheading>
        <StarRating value={overall} onChange={setOverall} size={28} />
      </WhiteCard>
      <WhiteCard>
        {CRITERIA.map((criterion) => (
          <CriteriaRow key={criterion}>
            <Subheading style={{ flexShrink: 1 }}>{criterion}</Subheading>
            <StarRating value={scores[criterion]} onChange={(value) => updateScore(criterion, value)} size={23} />
          </CriteriaRow>
        ))}
      </WhiteCard>
      <Button title="Continuar" onPress={continueReview} />
    </ScreenLayout>
  );
};
