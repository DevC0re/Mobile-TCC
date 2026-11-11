
import type { TextInputProps } from "react-native";
import {
    FieldWrapper,
    FieldLabel,
    FieldInput,
} from "./style";

interface AddressFieldProps extends TextInputProps {
    label: string;
}

export const AddressField = ({
                                 label,
                                 ...rest
                             }: AddressFieldProps) => {
    return (
        <FieldWrapper>
            <FieldLabel>{label}</FieldLabel>

            <FieldInput
                accessibilityLabel={label}
                placeholderTextColor="#647B90"
                returnKeyType="next"
                {...rest}
            />
        </FieldWrapper>
    );
};
