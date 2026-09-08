import {TextInput, View, Text, Pressable} from "react-native";
import {Inputstyle, LabelInput} from "./style";
import {Eye, EyeOff,} from "lucide-react-native";
import React, {useState} from "react";
import {useBreakpoint} from "../../hooks/useBreakpoint";



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

    const {isSmall, isTablet} = useBreakpoint();

    return (
        <View>
            <LabelInput isSmall={isSmall} >{label}</LabelInput>
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

