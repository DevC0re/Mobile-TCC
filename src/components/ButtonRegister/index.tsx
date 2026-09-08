import {Pressable, Text} from "react-native";
import {Buttonregister, TextButton} from "./style";
import {useBreakpoint} from "../../hooks/useBreakpoint";

interface PropsButton {
    text: string;
    onPress?: () => void;
}
const {isSmall, isTablet} = useBreakpoint();

export const ButtonRegister = ({text, onPress}: PropsButton) =>{
    return (
        <Buttonregister onPress={onPress}>
            <TextButton isSmall={isSmall}>{text}</TextButton>
        </Buttonregister>
    )
}