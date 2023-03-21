import React from "react";

import {
  Container,
  Text,
  Heading,
  Stack,
  Divider,
  Box,
  FormControl,
  Input,
  WarningOutlineIcon,
} from "native-base";

const FormControls = () => {
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
        NativeBase FormControl
      </Heading>
      <Text mx="2" my="4">
        FormControl is used to form elements by providing context such as
        isInvalid, isDisabled, and isRequired.
      </Text>

      <Text bold fontSize="md">
        Default
      </Text>
      <FormControl mb="5">
        <FormControl.Label>Project Title</FormControl.Label>
        <Input />
        <FormControl.HelperText>
          Give your project a title.
        </FormControl.HelperText>
      </FormControl>
      <Divider />

      <Text bold fontSize="md" mt="4">
        Disabled
      </Text>
      <FormControl isDisabled mb="5">
        <FormControl.Label
          _disabled={{
            _text: {
              color: "gray.400",
              fontWeight: "bold",
            },
          }}
        >
          Project Title
        </FormControl.Label>
        <Input placeholder="Title" isDisabled isReadOnly />
        <FormControl.HelperText>
          Give your project a title.
        </FormControl.HelperText>
      </FormControl>
      <Divider />

      <Text bold fontSize="md" mt="4">
        Invalid
      </Text>
      <FormControl isInvalid>
        <FormControl.Label>Project Title</FormControl.Label>
        <Input placeholder="Title" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Something is wrong.
        </FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
};

export default FormControls;
