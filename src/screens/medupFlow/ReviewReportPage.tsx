import { useRef, useState } from "react";
import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Camera, ImagePlus, X } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { Alert, Keyboard, ScrollView } from "react-native";
import { Button } from "../../components/button";
import { CardHospital } from "../../components/cardHospital";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import { BodyText, CaptionText, CardRow, FlexContent, Heading, Subheading, WhiteCard } from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { getHospital } from "../../features/medupDemo/data";
import { theme } from "../../style/theme";
import type { NavigationType } from "../../types/navigationType";
import { CommentInput, IconPressable, PhotoPicker, PreviewImage } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const ReviewReportPage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "ReviewReport">>();
  const navigation = useNavigation<Nav>();
  const hospital = getHospital(params.hospitalId);
  const { addReview } = useMedupDemo();
  const [comment, setComment] = useState("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  const choosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: false,
        quality: 0.8,
      });
      if (!result.canceled && result.assets[0]?.uri) setPhotoUri(result.assets[0].uri);
    } catch {
      Alert.alert("Erro ao selecionar imagem", "Não foi possível abrir a galeria.");
    }
  };

  const publish = () => {
    const clean = comment.trim();
    if (clean.length < 10) {
      Alert.alert("Conte mais sobre sua experiência", "Escreva pelo menos 10 caracteres no relato.");
      return;
    }
    addReview({
      id: `local-${Date.now()}`,
      hospitalId: hospital.id,
      author: "Você",
      date: new Date().toLocaleDateString("pt-BR"),
      scores: params.scores,
      overall: params.overall,
      comment: clean,
      photoUri: photoUri ?? undefined,
    });
    Keyboard.dismiss();
    Alert.alert("Avaliação publicada", "Seu relato foi adicionado nesta demonstração. Para publicar no servidor, será necessário conectar a API.", [
      { text: "Ver avaliações", onPress: () => navigation.navigate("HospitalReviews", { hospitalId: hospital.id }) },
    ]);
  };

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
        <CaptionText>Anexe uma foto para complementar seu relato.</CaptionText>
      </WhiteCard>
      <Button title="Publicar avaliação" onPress={publish} />
      <Button title="Voltar" outlined onPress={() => navigation.goBack()} />
    </ScreenLayout>
  );
};
