import React, { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../header";
import { NavBar } from "../navBar";
import { theme } from "../../style/theme";

interface ScreenLayoutProps {
  title: string;
  children: React.ReactNode;
  navbar?: boolean;
  scrollRef?: React.RefObject<ScrollView | null>;
}

export const ScreenLayout = ({ title, children, navbar = false, scrollRef }: ScreenLayoutProps) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const open = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const close = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
    return () => { open.remove(); close.remove(); };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <Header title={title} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          ref={scrollRef}
          style={{ flex: 1, backgroundColor: "#E6F4FA" }}
          contentContainerStyle={{ flexGrow: 1, padding: 15, paddingBottom: 26, gap: 13 }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
      {navbar && !keyboardVisible && <NavBar activeUserPage />}
    </SafeAreaView>
  );
};
