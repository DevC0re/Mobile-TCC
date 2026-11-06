import { MapPin, Pencil } from "lucide-react-native";

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
}

export const CardAddress = ({
	title,
	address,
	city,
	state,
	isPrincipal = false,
	onPressEdit,
}: CardAddressProps) => {
	return (
		<Container>
			<Header>
				<MapPin size={32} color="#19344E" strokeWidth={2} />

				<Content>
					<TitleRow>
						<Title>{title}</Title>

						<EditButton
							onPress={onPressEdit}
							accessibilityRole="button"
							accessibilityLabel={`Editar endereço ${title}`}
						>
							<Pencil size={27} color="#19344E" />
						</EditButton>
					</TitleRow>

					<Description>{address}</Description>

					<Description>
						{city} • {state}
					</Description>

					{isPrincipal && (
						<PrincipalBadge>
							<PrincipalText>Principal</PrincipalText>
						</PrincipalBadge>
					)}
				</Content>
			</Header>
		</Container>
	);
};
