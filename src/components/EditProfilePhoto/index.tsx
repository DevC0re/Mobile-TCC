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
  disabled?: boolean;
}

export const EditProfilePhoto = ({ image, onPress, disabled }: EditProfilePhotoProps) => {
  return (
    <Container>
      <ProfileImageContainer>
        {image ? <ProfileImage source={{ uri: image }} /> : <UserRound size={42} />}
      </ProfileImageContainer>
      <ChangePhotoButton
        onPress={onPress}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel="Alterar foto do perfil"
      >
        <Camera size={22} />
        <ChangePhotoText>{disabled ? "Salvando foto..." : "Alterar foto"}</ChangePhotoText>
      </ChangePhotoButton>
    </Container>
  );
};
