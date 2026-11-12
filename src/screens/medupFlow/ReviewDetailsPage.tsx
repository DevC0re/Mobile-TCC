import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { Trash2, X } from "lucide-react-native";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { HospitalMiniCard } from "../../components/medupFlow/HospitalMiniCard";
import { StarRating } from "../../components/medupFlow/StarRating";
import { BodyText, CaptionText, CardRow, SoftButton, SoftButtonText, Subheading, WhiteCard } from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { getHospitalWithReviews } from "../../features/medupDemo/data";
import { useHospitals } from "../../features/hospitals/HospitalsContext";
import type { NavigationType } from "../../types/navigationType";
import { DeleteReviewButton, DeleteReviewText, ReviewPhoto } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const ReviewDetailsPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "ReviewDetails">>();
  const navigation = useNavigation<Nav>();
  const { reviews, role, removeReview } = useMedupDemo();
  const { findHospital } = useHospitals();
  const [confirming, setConfirming] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const review = reviews.find((item) => item.id === params.reviewId);

  if (!review) return (
    <ScreenLayout title="Detalhes da avaliação">
      <WhiteCard><Subheading>Avaliação indisponível</Subheading>
        <BodyText>Esta avaliação foi excluída ou não está mais disponível.</BodyText>
      </WhiteCard>
    </ScreenLayout>
  );

  const found = findHospital(review.hospitalId);
  if (!found) return <ScreenLayout title="Detalhes da avaliação"><BodyText>Hospital não encontrado.</BodyText></ScreenLayout>;
  const hospital = getHospitalWithReviews(found, reviews);
  const photo = review.photoUri ? { uri: review.photoUri } : review.photo;
  const confirmDelete = () => {
    if (!removeReview(review.id)) { setConfirming(false); return; }
    setConfirming(false);
    navigation.goBack();
  };

  return (
    <ScreenLayout title="Detalhes da avaliação">
      <HospitalMiniCard hospital={hospital}
        onPress={() => navigation.navigate("HospitalProfile", { hospitalId: hospital.id })} />
      <WhiteCard>
        <View><Subheading>{review.author}</Subheading><CaptionText>{review.date}</CaptionText></View>
        <CardRow style={{ flexWrap: "wrap" }}>
          <StarRating value={review.overall} size={18} />
          <CaptionText>{review.overall.toFixed(1).replace(".", ",")} de 5</CaptionText>
        </CardRow>
        <BodyText style={{ color: "#193650" }}>{review.comment}</BodyText>
      </WhiteCard>
      <WhiteCard>
        <Subheading>Fotos da avaliação ({photo ? 1 : 0})</Subheading>
        {photo ? <>
          {photoFailed ? <BodyText>Não foi possível carregar a foto.</BodyText> :
            <ReviewPhoto source={photo} resizeMode="cover" onError={() => setPhotoFailed(true)}
              accessibilityLabel={`Foto enviada por ${review.author}`} />}
          <CaptionText>Foto enviada por {review.author}</CaptionText>
        </> : <BodyText>Esta avaliação não possui fotos.</BodyText>}
      </WhiteCard>
      {role === "ADMIN" && <>
        <DeleteReviewButton onPress={() => setConfirming(true)} accessibilityRole="button" accessibilityLabel="Excluir avaliação">
          <Trash2 size={18} color="#D52232" /><DeleteReviewText>Excluir avaliação</DeleteReviewText>
        </DeleteReviewButton>
        <Modal visible={confirming} transparent animationType="fade" onRequestClose={() => setConfirming(false)}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "center", padding: 24 }}>
            <WhiteCard accessibilityViewIsModal>
              <CardRow style={{ justifyContent: "space-between" }}>
                <Subheading>Excluir avaliação?</Subheading>
                <Pressable onPress={() => setConfirming(false)} accessibilityRole="button" accessibilityLabel="Fechar confirmação" style={{ padding: 12 }}><X size={22} color="#193650" /></Pressable>
              </CardRow>
              <BodyText>A avaliação de {review.author} será removida desta demonstração. Essa ação não pode ser desfeita durante a sessão.</BodyText>
              <SoftButton style={{ flex: 0 }} onPress={() => setConfirming(false)} accessibilityRole="button"><SoftButtonText>Cancelar</SoftButtonText></SoftButton>
              <DeleteReviewButton onPress={confirmDelete} accessibilityRole="button"><DeleteReviewText>Confirmar exclusão</DeleteReviewText></DeleteReviewButton>
            </WhiteCard>
          </View>
        </Modal>
      </>}
    </ScreenLayout>
  );
};
