import {Conteiner, Description, Main, SetionCard, TextHelper} from "./style";
import { Header } from "../../../components/header";
import {CardAddress} from "../../../components/cardAddress";
import {Button} from "../../../components/button";
import {Plus} from "lucide-react-native";
import {NavBar} from "../../../components/navBar";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationType} from "../../../types/navigationType";
import {useNavigation} from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<NavigationType>;

export const AddressPage = () => {

    const navigation = useNavigation<NavigationProps>();

    const handleAddress = () => {
        navigation.navigate("AddressPageAdd")
    }
	return (
		<Main>
			<Header title={"Meus endereços"} />
			<Conteiner>
				<Description>Gerencie seus locais salvos.</Description>
               <SetionCard>
                   <CardAddress
                       title="Casa"
                       address="Rua Giambattista Vico, 705"
                       city="São Paulo"
                       state="SP"
                       isPrincipal={true}

                   />

                   <CardAddress
                       title="Trabalho"
                       address="Av. das Nações Unidas, 1000"
                       city="São Paulo"
                       state="SP"
                   />
               </SetionCard>
                <Button title={"Adicionar endereço"} outlined={true}
                    icon={Plus} onPress={handleAddress} />
                <TextHelper>
                    Use seus endereços para encontrar hospitais próximos.
                </TextHelper>
			</Conteiner>
            <NavBar activeUserPage={true} />
		</Main>
	);
};
