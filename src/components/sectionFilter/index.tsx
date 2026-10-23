import { SectionFilterScroll } from "./style";
import { CardFilter } from "./cardFilter";
// Importe do 'lucide-react-native' se estiver usando React Native/Expo,
// ou mantenha 'lucide-react' se for React para Web.
import {
	Heart,
	Sparkles,
	Baby,
	Salad,
	Brain,
	Eye,
	Bone,
	type LucideIcon,
} from "lucide-react-native";

interface Especialidade {
	id: string;
	nome: string;
	icone: LucideIcon;
}

const especialidades: Especialidade[] = [
	{ id: "cardiologista", nome: "Cardiologista", icone: Heart },
	{ id: "dermatologista", nome: "Dermatologista", icone: Sparkles },
	{ id: "pediatra", nome: "Pediatra", icone: Baby },
	{ id: "nutricionista", nome: "Nutricionista", icone: Salad },
	{ id: "neurologista", nome: "Neurologista", icone: Brain },
	{ id: "oftalmologista", nome: "Oftalmologista", icone: Eye },
	{ id: "ortopedista", nome: "Ortopedista", icone: Bone },
];

export const SectionFilter = () => {
	return (
		<SectionFilterScroll
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		>
			{especialidades.map((especialidade) => {
				// Passamos o componente do ícone para uma variável com letra maiúscula
				// para que o React o reconheça como um componente válido
				const Icone = especialidade.icone;

				return (
					<CardFilter
						key={especialidade.id}
						// Renderiza o ícone e pode passar props de cor e tamanho aqui se necessário
						icon={<Icone />}
						text={especialidade.nome}
					/>
				);
			})}
		</SectionFilterScroll>
	);
};
