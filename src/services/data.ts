// Definimos os tipos permitidos para a propriedade "tipo"
type TipoHospital = "publico" | "particular";

// Criamos a interface (molde) para o objeto do hospital
interface Hospital {
	nome: string;
	endereco: string;
	aberto: boolean; // true para aberto, false para fechado
	nota: number; // de 0 a 5
	image: string;
	tipo: TipoHospital;
}

// Criamos o array de hospitais baseado na interface
export const hospitais: Hospital[] = [
	{
		nome: "Hospital das Clínicas",
		endereco: "Av. Dr. Enéas Carvalho de Aguiar, 255",
		aberto: true,
		nota: 4.8,
		tipo: "publico",
		image: "src/assets/img.png",
	},
	{
		nome: "Hospital Sírio-Libanês",
		endereco: "Rua Dona Adma Jafet, 115",
		aberto: true,
		nota: 5.0,
		tipo: "particular",
		image: "src/assets/img.png",
	},
	{
		nome: "Hospital São Paulo",
		endereco: "Rua Napoleão de Barros, 715",
		aberto: false,
		nota: 3.5,
		tipo: "publico",
		image: "src/assets/img.png",
	},
	{
		nome: "Hospital Albert Einstein",
		endereco: "Av. Albert Einstein, 627",
		aberto: true,
		nota: 4.9,
		tipo: "particular",
		image: "src/assets/img.png",
	},
];
