import styled from "styled-components/native";
import { Pressable, View } from "react-native";
import { theme } from "../../style/theme";

interface ButtonProps {
	isActive?: boolean;
}

export const NavBarContainer = styled(View)`
    flex-direction: row;
    background: ${theme.colors.teal};
    justify-content: space-between;
    padding: 15px;
`;
export const ButtonNavbar = styled(Pressable)<ButtonProps>`
    padding: 14px;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    filter: drop-shadow(4px 4px 8px rgba(47, 65, 86, 0.50));

    background: ${({ isActive }) => (isActive ? theme.colors.beige : "")};
`;
