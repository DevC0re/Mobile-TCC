import {Pressable, Text} from "react-native";
import {Buttonregister, TextButton} from "./style";

interface PropsButton {
    text: string;
    onPress?: () => void;
}


export const ButtonRegister = ({text, onPress}: PropsButton) =>{
    return (
        <Buttonregister onPress={onPress}>
            <TextButton>{text}</TextButton>
        </Buttonregister>
    )
}