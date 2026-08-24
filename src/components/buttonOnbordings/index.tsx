import {Button, ButtonText} from "./style";


interface ButtonProps {
    text: string;
}


export const ButtonOnBordings = ({text}: ButtonProps) => {
    return (
        <Button>
            <ButtonText>{text}</ButtonText>
        </Button>

    )
}