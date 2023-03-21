import React from "react";

import {
  Container,
  Heading,
  View,
  Text,
  Radio,
  HStack,
  Icon,
  FormControl,
  WarningOutlineIcon,
  Center,
Divider,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Radios = () => {
  const [value, setValue] = React.useState("one");
  const [groupValue, setGroupValue] = React.useState("1");
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
        NativeBase Radio
      </Heading>
      <Text mx="2" my="4">
        Radio limits the selection from a series of options to only one.
      </Text>

      <Heading size="md" my="2">
        Basic, disabled and invalid
      </Heading>
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
      >
        <HStack>
          <Radio value="one" my={1}>
            One
          </Radio>
          <Radio value="two" my={1} ml={2}>
            Two
          </Radio>
          <Radio value="three" my={1} ml={2} isDisabled>
            Three
          </Radio>
          <Radio value="four" my={1} ml={2} isInvalid>
            Four
          </Radio>
        </HStack>
      </Radio.Group>

      <Divider my="4" />

      <Heading size="md" my="2">
        Size and custom color
      </Heading>

      <Radio.Group
        name="exampleGroup"
        defaultValue="1"
        accessibilityLabel="pick a size"
      >
        <HStack space={4}>
          <Radio value="1" colorScheme="red" size="sm" my={1}>
            Small
          </Radio>
          <Radio value="2" colorScheme="green" size="md" my={1}>
            Medium
          </Radio>
          <Radio value="3" colorScheme="yellow" size="lg" my={1}>
            Large
          </Radio>
        </HStack>
      </Radio.Group>

      <Divider my="4" />

      <Heading size="md" my="2" >
        Custom icon
      </Heading>
      <Radio.Group
        defaultValue="1"
        size="lg"
        name="exampleGroup"
        accessibilityLabel="pick a choice"
      >
        <HStack space={2}>
          <Radio
            _text={{
              mx: 2,
            }}
            colorScheme="green"
            value="1"
            size="lg"
            icon={<Icon as={<MaterialCommunityIcons name="alien" />} />}
            my={1}
          >
            Alien
          </Radio>
          <Radio
            _text={{
              mx: 2,
            }}
            colorScheme="red"
            value="2"
            size="lg"
            icon={<Icon as={<MaterialCommunityIcons name="fire" />} />}
            my={1}
          >
            Fire
          </Radio>
          <Radio
            colorScheme="warning"
            _text={{
              mx: 2,
            }}
            value="3"
            size="lg"
            icon={<Icon as={<MaterialCommunityIcons name="exclamation" />} />}
            my={1}
          >
            Warning
          </Radio>
        </HStack>
      </Radio.Group>

      <Divider my="4" />

      <Heading size="md" my="2">
        Form Controlled
      </Heading>

      <Center>
        <FormControl isInvalid>
          <FormControl.Label
            _text={{
              fontSize: "lg",
              bold: true,
            }}
          >
            Select Prize
          </FormControl.Label>
          <Radio.Group
            name="exampleGroup"
            accessibilityLabel="select prize"
            defaultValue={groupValue}
            onChange={(value) => {
              setGroupValue(value || "");
            }}
          >
            <Radio value="1" my="1">
              First
            </Radio>
            <Radio value="2" my="1">
              Second
            </Radio>
            <Radio value="3" my="1">
              Third
            </Radio>
          </Radio.Group>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            You must select a Prize.
          </FormControl.ErrorMessage>
        </FormControl>
      </Center>
    </Container>
  );
};

export default Radios;
