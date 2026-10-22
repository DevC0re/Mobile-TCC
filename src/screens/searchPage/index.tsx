import {Conteiner, ImageContainer, Main} from "./style";
import { NavBar } from "../../components/navBar";
import { Header } from "../../components/header";
import { InputSearch } from "../../components/input";
import { SectionFilter } from "../../components/sectionFilter";
import Searchimage from "../../components/searchImagem";

export const SearchPage = () => {
	return (
		<Main>
			<Header title={"Pesquisar"} />
			<Conteiner>

				<InputSearch />

				<SectionFilter />

				<ImageContainer>
					<Searchimage />
				</ImageContainer>

			</Conteiner>
			<NavBar activeSearchPage={true} />
		</Main>
	);
};
