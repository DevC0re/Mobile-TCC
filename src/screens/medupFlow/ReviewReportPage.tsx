import { useRef, useState } from "react";
import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Camera, ImagePlus, X } from "lucide-react-native";
import { Alert, Keyboard, ScrollView } from "react-native";
import { Button } from "../../components/button";
import { CardHospital } from "../../components/cardHospital";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { BodyText, CaptionText, CardRow, FlexContent, Heading, Subheading, WhiteCard } from "../../components/medupFlow/style";
import { useHospitals } from "../../features/hospitals/HospitalsContext";
import { theme } from "../../style/theme";
import type { NavigationType } from "../../types/navigationType";
import { CommentInput, IconPressable, PhotoPicker, PreviewImage } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const ReviewReportPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "ReviewReport">>();
  const navigation = useNavigation<Nav>();
  const { findHospital } = useHospitals();
  const hospital = findHospital(params.hospitalId);
  const [comment, setComment] = useState("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  // O servidor ainda não oferece publicação de avaliações vinculadas a hospitais.
  // Mantemos o layout para evolução futura, sem simular um envio bem-sucedido.
  const choosePhoto = async () => {
    Alert.alert("Anexo indisponível", "O servidor ainda não permite enviar fotos de avaliações.");
  };

  if (!hospital) return <ScreenLayout title="Seu relato"><BodyText>Hospital não encontrado.</BodyText></ScreenLayout>;
  return (
    <ScreenLayout title="Seu relato" scrollRef={scrollRef}>
      <CardHospital hospital={hospital} showFavorite={false} />
      <Subheading>Conte como foi seu atendimento</Subheading>
      <WhiteCard>
        <CommentInput
          multiline
          maxLength={500}
          value={comment}
          onChangeText={setComment}
          placeholder="Descreva sua experiência no hospital. Você pode falar sobre atendimento, estrutura ou tempo de espera."
          placeholderTextColor="#8299A8"
          accessibilityLabel="Relato do atendimento"
          onFocus={() => scrollRef.current?.scrollTo({ y: 120, animated: true })}
        />
        <CaptionText>{comment.length} / 500</CaptionText>
      </WhiteCard>
      <WhiteCard>
        <Subheading>Foto da avaliação (opcional)</Subheading>
        {photoUri ? (
          <CardRow>
            <PreviewImage source={{ uri: photoUri }} />
            <FlexContent>
              <BodyText>Imagem selecionada</BodyText>
              <PhotoPicker onPress={choosePhoto} style={{ minHeight: 34, alignSelf: "flex-start", paddingHorizontal: 12 }}>
                <BodyText>Trocar imagem</BodyText>
              </PhotoPicker>
            </FlexContent>
            <IconPressable onPress={() => setPhotoUri(null)} accessibilityLabel="Remover foto">
              <X size={22} color={theme.colors.navy} />
            </IconPressable>
          </CardRow>
        ) : (
          <PhotoPicker onPress={choosePhoto} accessibilityRole="button" accessibilityLabel="Selecionar foto">
            <ImagePlus size={21} color={theme.colors.teal} />
            <Subheading style={{ color: theme.colors.teal }}>Selecionar imagem</Subheading>
          </PhotoPicker>
        )}
        <CaptionText>Fotos de avaliações ainda não podem ser enviadas ao servidor.</CaptionText>
      </WhiteCard>
      <Button title="Publicação indisponível" disabled />
      <Button title="Voltar" outlined onPress={() => navigation.goBack()} />
    </ScreenLayout>
  );
};
