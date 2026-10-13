import { Main } from "./style";
import { NavBar } from "../../components/navBar";
import { View } from "react-native";
import { Header } from "../../components/header";
import { InputSearch } from "../../components/input";
import { CardFilter } from "../../components/sectionFilter/cardFilter";
import { SectionFilter } from "../../components/sectionFilter";

export const SearchPage = () => {
	return (
		<Main>
			<View>
				<Header title={"Pesquisar"} />
				<InputSearch />

				<SectionFilter />

				<NavBar activeSearchPage={true} />
			</View>
		</Main>
	);
};
