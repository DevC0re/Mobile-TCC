import {MapPin, Pencil, Trash} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

import {
	Container,
	Header,
	Content,
	TitleRow,
	Title,
	Description,
	EditButton,
	PrincipalBadge,
	PrincipalText,
} from "./style";

interface CardAddressProps {
	title: string;
	address: string;
	city: string;
	state: string;
	isPrincipal?: boolean;
	onPressEdit?: () => void;
  onPressDelete?: () => void;
  onPressPrincipal?: () => void;
}

export const CardAddress = ({
	title,
	address,
	city,
	state,
	isPrincipal = false,
	onPressEdit,
  onPressDelete,
  onPressPrincipal,
}: CardAddressProps) => {
	return (
		<Container>
			<Header>
				<MapPin size={32} color="#19344E" strokeWidth={2} />

				<Content>
					<TitleRow>
						<Title>{title}</Title>

            <View style={{flexDirection: "row", alignItems: "center"}}>
              {onPressEdit && <EditButton onPress={onPressEdit} accessibilityRole="button" accessibilityLabel={`Editar endereço ${title}`}>
                <Pencil size={23} color="#19344E" />
              </EditButton>}
              {onPressDelete && <EditButton onPress={onPressDelete} accessibilityRole="button" accessibilityLabel={`Excluir endereço ${title}`}>
                <Trash size={23} color="#C82909" />
              </EditButton>}
            </View>
					</TitleRow>

					<Description>{address}</Description>

					<Description>
						{city} • {state}
					</Description>

          {isPrincipal && <PrincipalBadge><PrincipalText>Principal</PrincipalText></PrincipalBadge>}
          {onPressPrincipal && <Pressable onPress={onPressPrincipal} accessibilityRole="button" style={{ paddingVertical: 12 }}>
            <Text style={{color: "#19344E", textDecorationLine: "underline"}}>Definir como principal</Text>
          </Pressable>}
				</Content>
			</Header>
		</Container>
	);
};
