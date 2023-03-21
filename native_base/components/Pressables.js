import React from "react";

import {
    Container,
    Text,
    Button,
    VStack,
    Heading,
    Stack,
    Divider,
    HStack,
    Spacer,
    Badge,
    Box,
    Flex,
    Pressable,
} from "native-base";

const Pressables = () => {
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
        NativeBase Pressables
      </Heading>
      <Text mx="2" my="4">
        Pressable is a lower level primitive if you need more flexibility than a
        button and access to hover, pressed and focus events.
      </Text>

      <Box alignItems="center">
        <Pressable maxW="96">
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                bg={
                  isPressed
                    ? "secondary.200"
                    : isHovered
                    ? "secondary.200"
                    : "secondary.50"
                }
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                p="5"
                rounded="8"
                shadow={3}
                borderWidth="1"
                borderColor="coolGray.300"
              >
                <HStack alignItems="center">
                  <Badge
                    colorScheme="darkBlue"
                    _text={{
                      color: "white",
                    }}
                    variant="solid"
                    rounded="4"
                  >
                    Business
                  </Badge>
                  <Spacer />
                  <Text fontSize={10} color="coolGray.800">
                    1 month ago
                  </Text>
                </HStack>
                <Text
                  color="coolGray.800"
                  mt="3"
                  fontWeight="medium"
                  fontSize="xl"
                >
                  Marketing License
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  Unlock powerfull time-saving tools for creating email delivery
                  and collecting marketing data
                </Text>
                <Flex>
                  {isFocused ? (
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      textDecorationLine="underline"
                      color="darkBlue.600"
                      alignSelf="flex-start"
                    >
                      Read More
                    </Text>
                  ) : (
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      color="darkBlue.600"
                    >
                      Read More
                    </Text>
                  )}
                </Flex>
              </Box>
            );
          }}
        </Pressable>
      </Box>
    </Container>
  );
};

export default Pressables;
