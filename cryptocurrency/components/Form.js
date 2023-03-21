import React, { useState } from "react";
import {
  Stack,
  Center,
  FormControl,
  View,
  Text,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Button,
  VStack,
} from "native-base";

const Form = () => {
  const [service, setService] = useState("");
  return (
    <View>
      <Text>Currency</Text>
      <Text>Cryptocurrency</Text>
      <Center>
        <FormControl w="3/4" maxW="300" isRequired isInvalid>
          <FormControl.Label>Choose service</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>
      </Center>

      <VStack space={4} alignItems="center">
        {["xs", "sm", "md", "lg"].map((size) => (
          <Button key={size} size={size}>
            BUTTON
          </Button>
        ))}
      </VStack>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        space={2}
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
      >
        <Button isLoading>Button</Button>
        <Button isLoading isLoadingText="Submitting">
          Button
        </Button>
        <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
          Button
        </Button>
        <Button
          isLoading
          _loading={{
            bg: "amber.400:alpha.70",
            _text: {
              color: "coolGray.700",
            },
          }}
          _spinner={{
            color: "white",
          }}
          isLoadingText="Submitting"
        >
          Button
        </Button>
        <Button isLoading isLoadingText="Submitting" variant="outline">
          Button
        </Button>
      </Stack>
    </View>
  );
};

export default Form;
