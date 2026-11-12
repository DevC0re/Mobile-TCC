import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "../../components/button";
import { Image, Pressable } from "react-native";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { StarRating } from "../../components/medupFlow/StarRating";
import { BodyText, CaptionText, Heading, SectionSpace, Subheading, WhiteCard } from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { getHospitalWithReviews } from "../../features/medupDemo/data";
import { useHospitals } from "../../features/hospitals/HospitalsContext";
import type { NavigationType } from "../../types/navigationType";

type Nav = NativeStackNavigationProp<NavigationType>;

export const HospitalReviewsPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "HospitalReviews">>();
  const navigation = useNavigation<Nav>();
  const { reviews: allReviews } = useMedupDemo();
  const { findHospital } = useHospitals();
  const found = findHospital(params.hospitalId);
  const hospital = found ? getHospitalWithReviews(found, allReviews) : undefined;
  const { reviews } = useMedupDemo();
  const hospitalReviews = reviews.filter((review) => review.hospitalId === params.hospitalId);
  if (!hospital) return <ScreenLayout title="Avaliações"><BodyText>Hospital não encontrado.</BodyText></ScreenLayout>;


  return (
    <ScreenLayout title="Avaliações">
      <WhiteCard>
        <Heading>Avaliações indisponíveis</Heading>
        <BodyText>A publicação e listagem de avaliações de hospitais ainda dependem de endpoints associados ao hospital no back-end.</BodyText>
      </WhiteCard>
      <SectionSpace>
        {hospitalReviews.length === 0 && (
          <WhiteCard>
            <BodyText>Ainda não há avaliações disponíveis pela API.</BodyText>
          </WhiteCard>
        )}
        {hospitalReviews.map((review) => (
          <Pressable key={review.id}
            accessibilityRole="button"
            accessibilityLabel={`Ver avaliação de ${review.author}`}
            onPress={() => navigation.navigate("ReviewDetails", { reviewId: review.id })}
          >
          <WhiteCard>
            <Subheading>{review.author}</Subheading>
            <CaptionText>{review.date}</CaptionText>
            <StarRating value={review.overall} size={17} />
            <BodyText style={{ color: "#2F4156" }}>{review.comment}</BodyText>
            {(review.photoUri || review.photo) && (
              <Image
                source={review.photoUri ? { uri: review.photoUri } : review.photo}
                style={{ width: "100%", height: 140, borderRadius: 10 }}
                resizeMode="cover"
                accessibilityLabel="Foto anexada à avaliação"
              />
            )}
            <CaptionText style={{ textDecorationLine: "underline" }}>Ver detalhes da avaliação</CaptionText>
          </WhiteCard>
          </Pressable>
        ))}
      </SectionSpace>
    </ScreenLayout>
  );
};
