import { UserRound, MapPin, Heart, ShieldPlus } from "lucide-react-native";

import { CardProfileOptions } from "./cardProfileOptions";
import { SectionCardOptions } from "./style";

export const SectionProfileOptions = () => {
	return (
		<SectionCardOptions>
			<CardProfileOptions
				icon={UserRound}
				title="Editar perfil"
				description="Atualize suas informações"
			/>

			<CardProfileOptions
				icon={MapPin}
				title="Meus endereços"
				description="Gerencie seus locais salvos"
			/>

			<CardProfileOptions
				icon={Heart}
				title="Favoritos"
				description="Hospitais que você salvou"
			/>

			<CardProfileOptions
				icon={ShieldPlus}
				title="Meus convênios"
				description="Seus planos de saúde"
			/>
		</SectionCardOptions>
	);
};
