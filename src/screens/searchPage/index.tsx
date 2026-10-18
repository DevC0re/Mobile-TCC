import {Conteiner, Main} from "./style";
import { NavBar } from "../../components/navBar";
import { View } from "react-native";
import { Header } from "../../components/header";
import { InputSearch } from "../../components/input";
import { CardFilter } from "../../components/sectionFilter/cardFilter";
import { SectionFilter } from "../../components/sectionFilter";
import Searchimage from "../../components/searchImagem";

export const SearchPage = () => {
	return (
		<Main>
			<Conteiner>
				<Header title={"Pesquisar"} />
				<InputSearch />

				<SectionFilter />

				<View>
					<Searchimage/>
				</View>

				<NavBar activeSearchPage={true} />
			</Conteiner>
		</Main>
	);
};
