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
import { getHospitalWithReviews } from "../../features/medupDemo/data";
import { useHospitals } from "../../features/hospitals/HospitalsContext";
import { theme } from "../../style/theme";
import type { NavigationType } from "../../types/navigationType";
import { HeaderRow, IconPressable, LargeHospitalImage } from "./style";

type Nav = NativeStackNavigationProp<NavigationType>;

export const HospitalProfilePage = () => {
  const { params } = useRoute<RouteProp<NavigationType, "HospitalProfile">>();
  const navigation = useNavigation<Nav>();
  const { reviews: allReviews } = useMedupDemo();
  const { findHospital } = useHospitals();
  const found = findHospital(params.hospitalId);
  const hospital = found ? getHospitalWithReviews(found, allReviews) : undefined;
  const { favorites, toggleFavorite } = useMedupDemo();
  const favorite = hospital ? favorites.includes(hospital.id) : false;

  if (!hospital) return <ScreenLayout title="Perfil do hospital"><BodyText>Hospital não encontrado. Atualize a lista na Home.</BodyText></ScreenLayout>;

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
      Alert.alert("Telefone indisponível", "O telefone não está cadastrado no servidor.");
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
          <Subheading>{hospital.reviewCount ? `${hospital.rating.toFixed(1).replace(".", ",")} (${hospital.reviewCount} avaliações)` : "Avaliações indisponíveis"}</Subheading>
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
            <BodyText>{hospital.specialties.length ? hospital.specialties.join(", ") : "Não informadas pelo servidor."}</BodyText>
          </FlexContent>
        </CardRow>
      </WhiteCard>
      <WhiteCard>
        <CardRow>
          <ShieldPlus size={23} color={theme.colors.teal} />
          <FlexContent>
            <Subheading>Convênios aceitos</Subheading>
            <BodyText>{hospital.insurances.length ? hospital.insurances.join(", ") : "Não informados pelo servidor."}</BodyText>
          </FlexContent>
        </CardRow>
      </WhiteCard>
      <WhiteCard>
        <CardRow>
          <Syringe size={23} color={theme.colors.teal} />
          <Subheading>Vacinas</Subheading>
        </CardRow>
        <BodyText>{hospital.vaccines?.length ? hospital.vaccines.join(" • ") : "Vacinas não informadas pelo servidor."}</BodyText>
        <BodyText>Confirme a disponibilidade de vacinas diretamente com a unidade.</BodyText>
      </WhiteCard>
      <Button title="Ver avaliações" outlined onPress={() => navigation.navigate("HospitalReviews", { hospitalId: hospital.id })} />
    </ScreenLayout>
  );
};
