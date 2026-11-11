import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Heart, Info, Plus, ShieldPlus, Star, Syringe } from "lucide-react-native";
import { Alert, Linking } from "react-native";
import { Button } from "../../components/button";
import { ScreenLayout } from "../../components/medupFlow/ScreenLayout";
import {
  BodyText, CardRow, FlexContent, Heading, SectionSpace,
  SmallButtonRow, SoftButton, SoftButtonText, Subheading, WhiteCard,
} from "../../components/medupFlow/style";
import { useMedupDemo } from "../../features/medupDemo/DemoContext";
import { getHospital, getHospitalWithReviews } from "../../features/medupDemo/data";
import { theme } from "../../style/theme";
import type { NavigationType } from "../../types/navigationType";
import { HeaderRow, IconPressable, LargeHospitalImage } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const HospitalProfilePage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "HospitalProfile">>();
  const navigation = useNavigation<Nav>();
  const { reviews: allReviews } = useMedupDemo();
  const hospital = getHospitalWithReviews(getHospital(params.hospitalId), allReviews);
  const { favorites, toggleFavorite } = useMedupDemo();
  const favorite = favorites.includes(hospital.id);

  const openDirections = async () => {
    const query = encodeURIComponent(`${hospital.name}, ${hospital.city}`);
    try {
      await Linking.openURL(`https://www.openstreetmap.org/search?query=${query}`);
    } catch {
      Alert.alert("Mapa indisponível", "Não foi possível abrir o OpenStreetMap.");
    }
  };

  const callHospital = async () => {
    if (!hospital.phone) {
      Alert.alert("Telefone indisponível", "O telefone não está cadastrado nesta demonstração.");
      return;
    }
    try {
      await Linking.openURL(`tel:${hospital.phone}`);
    } catch {
      Alert.alert("Ligação indisponível", "Não foi possível abrir o aplicativo de telefone.");
    }
  };

  return (
    <ScreenLayout title="Perfil do hospital">
      <WhiteCard>
        <LargeHospitalImage source={hospital.image} resizeMode="cover" />
        <HeaderRow>
          <Heading numberOfLines={2} style={{ flex: 1 }}>{hospital.name}</Heading>
          <IconPressable
            onPress={() => toggleFavorite(hospital.id)}
            accessibilityRole="button"
            accessibilityLabel={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart size={24} color={favorite ? "#C63040" : theme.colors.navy} fill={favorite ? "#C63040" : "none"} />
          </IconPressable>
        </HeaderRow>
        <IconPressable
          style={{ alignSelf: "flex-start", minHeight: 30, flexDirection: "row", gap: 5 }}
          onPress={() => navigation.navigate("HospitalReviews", { hospitalId: hospital.id })}
        >
          <Star size={15} color={theme.colors.navy} fill={theme.colors.navy} />
          <Subheading>{hospital.rating.toFixed(1).replace(".", ",")} ({hospital.reviewCount.toLocaleString("pt-BR")} avaliações)</Subheading>
        </IconPressable>
        <SmallButtonRow>
          <SoftButton onPress={openDirections}><SoftButtonText>Como chegar</SoftButtonText></SoftButton>
          <SoftButton style={{ backgroundColor: theme.colors.navy }} onPress={callHospital}>
            <SoftButtonText style={{ color: theme.colors.white }}>Ligar</SoftButtonText>
          </SoftButton>
        </SmallButtonRow>
      </WhiteCard>
      <WhiteCard>
        <CardRow>
          <Info size={23} color={theme.colors.teal} />
          <FlexContent>
            <Subheading>Sobre o hospital</Subheading>
            <BodyText>{hospital.description}</BodyText>
          </FlexContent>
        </CardRow>
      </WhiteCard>
      <WhiteCard>
        <CardRow>
          <Plus size={23} color={theme.colors.teal} />
          <FlexContent>
            <Subheading>Especialidades</Subheading>
            <BodyText>{hospital.specialties.join(", ")}.</BodyText>
          </FlexContent>
        </CardRow>
      </WhiteCard>
      <WhiteCard>
        <CardRow>
          <ShieldPlus size={23} color={theme.colors.teal} />
          <FlexContent>
            <Subheading>Convênios aceitos</Subheading>
            <BodyText>{hospital.insurances.join(", ")}.</BodyText>
          </FlexContent>
        </CardRow>
      </WhiteCard>
      <WhiteCard>
        <CardRow>
          <Syringe size={23} color={theme.colors.teal} />
          <Subheading>Vacinas</Subheading>
        </CardRow>
        <BodyText>{hospital.vaccines?.length ? hospital.vaccines.join(" • ") : "Nenhuma vacina informada."}</BodyText>
        <BodyText>Informadas por usuários. Confirme a disponibilidade com a unidade.</BodyText>
      </WhiteCard>
      <Button title="Ver avaliações" outlined onPress={() => navigation.navigate("HospitalReviews", { hospitalId: hospital.id })} />
    </ScreenLayout>
  );
};
