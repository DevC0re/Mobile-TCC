import { UserRound, MapPin, Heart, ShieldPlus } from "lucide-react-native";

import { CardProfileOptions } from "./cardProfileOptions";
import { SectionCardOptions } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationType } from "../../types/navigationType";
import { useNavigation } from "@react-navigation/native";
import {AddressPayload} from "../../types/addressType";

type NavigationProps = NativeStackNavigationProp<NavigationType>;

export const SectionProfileOptions = () => {
	const navigation = useNavigation<NavigationProps>();

	const handleEditpage = () => {
		navigation.navigate("EditPage");
	};

	const handleAddresspage = () => {
		navigation.navigate("AddressPage")
	}
	const handleAddress = () => {
		navigation.navigate("AddressPageAdd")
	}

	return (
		<SectionCardOptions>
			<CardProfileOptions
				icon={UserRound}
				title="Editar perfil"
				description="Atualize suas informações"
				onPress={handleEditpage}
			/>

			<CardProfileOptions
				icon={MapPin}
				title="Meus endereços"
				description="Gerencie seus locais salvos"
				onPress={handleAddresspage}
			/>

			<CardProfileOptions
				icon={Heart}
				title="Favoritos"
				description="Hospitais que você salvou"
        onPress={() => navigation.navigate("FavoritesPage")}
			/>

			<CardProfileOptions
				icon={ShieldPlus}
				title="Meus convênios"
				description="Seus planos de saúde"
        onPress={() => navigation.navigate("InsurancePlans")}
			/>
		</SectionCardOptions>
	);
};
