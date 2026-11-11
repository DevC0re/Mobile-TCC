import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const HorizontalScrollConteiner = styled(ScrollView).attrs({
  contentContainerStyle: {
    gap: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
})``;
