import { Camera, UserRound } from "lucide-react-native";

import {
	Container,
	ProfileImageContainer,
	ProfileImage,
	ChangePhotoButton,
	ChangePhotoText,
} from "./style";

interface EditProfilePhotoProps {
	image?: string | null;
	onPress?: () => void;
}

export const EditProfilePhoto = ({ image, onPress }: EditProfilePhotoProps) => {
	return (
		<Container>
			<ProfileImageContainer>
				{image ? <ProfileImage source={{ uri: image }} /> : <UserRound />}
			</ProfileImageContainer>

			<ChangePhotoButton onPress={onPress}>
				<Camera />

				<ChangePhotoText>Alterar foto</ChangePhotoText>
			</ChangePhotoButton>
		</Container>
	);
};
