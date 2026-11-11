import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "../../components/button";
import { Image, Pressable } from "react-native";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { StarRating } from "../../components/medupFlow/StarRating";
import { BodyText, CaptionText, Heading, SectionSpace, Subheading, WhiteCard } from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { getHospital, getHospitalWithReviews } from "../../features/medupDemo/data";
import type { NavigationType } from "../../types/navigationType";

type Nav = NativeStackNavigationProp<NavigationType>;

export const HospitalReviewsPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "HospitalReviews">>();
  const navigation = useNavigation<Nav>();
  const { reviews: allReviews } = useMedupDemo();
  const hospital = getHospitalWithReviews(getHospital(params.hospitalId), allReviews);
  const { reviews } = useMedupDemo();
  const hospitalReviews = reviews.filter((review) => review.hospitalId === hospital.id);


  return (
    <ScreenLayout title="Avaliações">
      <WhiteCard>
        <Heading>{hospital.rating.toFixed(1).replace(".", ",")} de 5</Heading>
        <StarRating value={hospital.rating} size={21} />
        <CaptionText>{hospital.reviewCount.toLocaleString("pt-BR")} avaliações</CaptionText>
        <Button title="Avaliar hospital" onPress={() => navigation.navigate("HospitalRating", { hospitalId: hospital.id })} />
      </WhiteCard>
      <SectionSpace>
        {hospitalReviews.length === 0 && (
          <WhiteCard>
            <BodyText>Ainda não existem relatos nesta demonstração. Compartilhe sua experiência.</BodyText>
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
