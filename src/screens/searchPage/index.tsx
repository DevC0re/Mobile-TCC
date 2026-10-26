import { Header } from "../../components/header";
import { InputSearch } from "../../components/input";
import { NavBar } from "../../components/navBar";
import Searchimage from "../../components/searchImagem";
import { SectionFilter } from "../../components/sectionFilter";
import { Conteiner, ImageContainer, Main } from "./style";

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
