import { View } from "react-native";
import { CardProfileOptions } from "./cardProfileOptions";
import {SectionCardOptions} from "./style";

export const SectionProfileOptions = () => {
	return (
		<SectionCardOptions>
			<CardProfileOptions />
            <CardProfileOptions />
            <CardProfileOptions />
            <CardProfileOptions />
		</SectionCardOptions>
	);
};
