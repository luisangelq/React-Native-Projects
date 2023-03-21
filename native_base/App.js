import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  ScrollView,
  Container,
} from "native-base";
import { Platform } from "react-native";
import Buttons from "./components/Buttons";
import Pressables from "./components/Pressables";
import Checkboxs from "./components/Checkboxs";
import FormControls from "./components/FormControls";
import IconButtons from "./components/IconButtons";
import Inputs from "./components/Inputs";
import Radios from "./components/Radios";
import Selects from "./components/Selects";
import Sliders from "./components/Sliders";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center flex={1} safeAreaTop="16" safeAreaBottom="16">
          <Heading size="lg" color="primary.600">
            NativeBase components
          </Heading>
          <Buttons />
          <Inputs />
          <Checkboxs />
          <Selects />
          <Radios />
          <Pressables />
          <FormControls />
          <IconButtons />
          <Sliders />
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
