import {TextInput, View, Text, Pressable} from "react-native";
import {Inputstyle, LabelInput} from "./style";
import {Eye, EyeOff,} from "lucide-react-native";
import React, {useState} from "react";



interface IProps {
    textplace: string;
    label: string;
    password?: boolean;
    autocapitalize?: 'none' | 'sentences'| "words" | "characters" ;

}

export const Input = ({label, textplace, password, autocapitalize} : IProps) =>{

    const [ isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    }

    return (
        <View>
            <LabelInput>{label}</LabelInput>
            <Inputstyle>
                <TextInput placeholder={textplace} secureTextEntry={password ? !isPasswordVisible : false} autoCapitalize={autocapitalize} />
                { password &&
                    <Pressable onPress={togglePasswordVisibility}>
                        { isPasswordVisible? (
                            <Eye/>
                        ):(
                            <EyeOff/>
                        )
                        }
                    </Pressable>
                }

            </Inputstyle>

        </View>

    )
}

