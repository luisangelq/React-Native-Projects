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
  Pressable,
  Image,
} from "native-base";
import { Platform } from "react-native";
import Header from "./components/Header";
import Form from "./components/Form";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />

      <Center>
        <VStack alignItems="center">
          <Image
            source={require("./assets/img/cryptomonedas.png")}
            alt="image base"
            resizeMode="contain"
            height={150}
          />

          <Form />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
