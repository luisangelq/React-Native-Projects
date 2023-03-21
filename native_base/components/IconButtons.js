import React from "react";

import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Icon,
Divider,
} from "native-base";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";

const IconButtons = () => {
  return (
    <Container
      w="100%"
      alignItems="center"
      rounded="lg"
      borderWidth="1"
      borderColor="coolGray.400"
      mt={10}
      p={2}
    >
      <Heading size="lg" color="tertiary.600">
        NativeBase IconButtons
      </Heading>
      <Text mx="2" my="4">
        IconButton consists of the Button component. It is generally used to
        make an Icon pressable.
      </Text>

      <Heading size="md">Basic</Heading>
      <VStack space={4} w="100%" alignItems="center" justifyContent="center">
        <IconButton
          icon={<Icon as={Entypo} name="emoji-happy" />}
          borderRadius="full"
          _icon={{
            color: "orange.500",
            size: "md",
          }}
          _hover={{
            bg: "orange.600:alpha.20",
          }}
          _pressed={{
            bg: "orange.600:alpha.20",
            _icon: {
              name: "emoji-flirt",
            },
          }}
        />
      </VStack>

      <Divider my="4" />

      <Heading size="md" my="4">
        Sizes
      </Heading>
      <HStack space={4} alignItems="center">
        {["xs", "sm", "md", "lg"].map((size) => (
          <IconButton
            key={size}
            size={size}
            variant="solid"
            _icon={{
              as: MaterialIcons,
              name: "menu",
            }}
          />
        ))}
      </HStack>

      <Divider my="4" />

      <Heading size="md" >
        Variants
      </Heading>
      <HStack space={4} alignItems="center" my="2">
        {["outline", "solid", "ghost"].map((variant) => (
          <IconButton
            colorScheme="indigo"
            key={variant}
            variant={variant}
            _icon={{
              as: AntDesign,
              name: "search1",
            }}
          />
        ))}
      </HStack>
    </Container>
  );
};

export default IconButtons;
