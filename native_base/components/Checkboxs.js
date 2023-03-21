import React from "react";

import {
  Container,
  Text,
  VStack,
  Heading,
  Checkbox,
  Icon,
  Divider,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Checkboxs = () => {
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
        NativeBase Checkbox
      </Heading>
      <Text mx="2" my="4">
        The Checkbox component allows a user to select multiple values from
        various options in a form.
      </Text>

      <Heading size="md">Basic</Heading>
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />

      <Divider my="4" />

      <Heading size="md" my={2}>
        Sizes
      </Heading>
      <VStack space={2}>
        <Checkbox value="red" size="sm" defaultIsChecked>
          UX Research
        </Checkbox>
        <Checkbox size="md" defaultIsChecked value="green">
          UX Research
        </Checkbox>
        <Checkbox value="yellow" size="lg" defaultIsChecked>
          UX Research
        </Checkbox>
      </VStack>

      <Divider my="4" />

      <Heading size="md" my={2}>
        Disabled and Invalid
      </Heading>
      <VStack space={2}>
        <Checkbox value="two" isDisabled defaultIsChecked>
          Software Development
        </Checkbox>
        <Checkbox value="two" isInvalid>
          Software Development
        </Checkbox>
      </VStack>

      <Divider my="4" />

      <Heading size="md">Custom Color</Heading>
      <VStack space={2}>
        <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
          Danger
        </Checkbox>
        <Checkbox value="info" colorScheme="green" defaultIsChecked>
          Info
        </Checkbox>
      </VStack>

      <Divider my="4" />

      <Heading size="md">Custom Icon</Heading>

      <VStack space={2}>
        <Checkbox
          value="dark"
          colorScheme="dark"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="bat" />} />}
          defaultIsChecked
        >
          Movie
        </Checkbox>
        <Checkbox
          colorScheme="red"
          value="red"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="campfire" />} />}
          defaultIsChecked
        >
          Camping
        </Checkbox>
      </VStack>
    </Container>
  );
};

export default Checkboxs;
