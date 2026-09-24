import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

interface BreakpointProps {
	width: number;
	height: number;
	isSmall: boolean;
	isTablet: boolean;
}

export const useBreakpoint = (): BreakpointProps => {
	const { width, height } = useWindowDimensions();

	return useMemo(
		() => ({
			width,
			height,
			isSmall: width < 375,
			isTablet: width >= 768,
		}),
		[width, height],
	);
};
