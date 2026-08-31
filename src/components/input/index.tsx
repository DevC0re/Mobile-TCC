import {TextInput} from "react-native";

interface IProps {
    textplace: string;
    type: string;


}


export const Input = ({textplace, type} : IProps) =>{
    return (
        <TextInput placeholder={textplace} value={type} />
    )
}