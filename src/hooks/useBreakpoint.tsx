import {useWindowDimensions} from "react-native";
import {useMemo} from "react";

interface BreakpointProps {
    windth: number;
    height: number;
    isSmall: boolean;
    isTablet: boolean;

}


export const useBreakpoint = () =>{

    const {width, height} = useWindowDimensions();

    return useMemo(() =>({
        width,
        height,
        isSmall: width < 375,
        isTablet: width >= 768,
        }), [width, height]
    )


}