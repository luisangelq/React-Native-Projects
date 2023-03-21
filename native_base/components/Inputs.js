import React from "react";

import {
  Container,
  Heading,
  View,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  Pressable,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Inputs = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
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
        NativeBase Input
      </Heading>
      <Text mx="2" my="4">
        IconButton consists of the Button component. It is generally used to
        make an Icon pressable.
      </Text>

      <Heading size="md" my="2">
        Variants
      </Heading>
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="underlined" placeholder="Underlined" />
        <Input variant="unstyled" placeholder="Unstyled" />
        <Input variant="rounded" placeholder="Round" />
      </Stack>

      <Heading size="md" my="2" mt="4">
        Addons
      </Heading>
      <Stack>
        <InputGroup
          w={{
            base: "70%",
            md: "285",
          }}
          justifyContent="center"
        >
          <InputLeftAddon children={"https://"} />
          <Input
            w={{
              base: "70%",
              md: "100%",
            }}
            placeholder="nativebase"
          />
          <InputRightAddon children={".io"} />
        </InputGroup>
      </Stack>

      <Heading size="md" my="2" mt="4">
        Elements
      </Heading>
      <Stack space={4} w="100%" alignItems="center">
        <Input
          w={{
            base: "75%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Name"
        />
        <Input
          w={{
            base: "75%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />
      </Stack>

      <Heading size="md" my="2" mt="4">
        Controlled 
      </Heading>
      <Input
        type={show ? "text" : "password"}
        w="100%"
        py="0"
        InputRightElement={
          <Button
            size="xs"
            rounded="none"
            w="1/6"
            h="full"
            onPress={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        }
        placeholder="Password"
      />
    </Container>
  );
};

export default Inputs;
