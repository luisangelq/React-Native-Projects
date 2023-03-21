import React from "react";
import {
  Container,
  Text,
  Button,
  VStack,
  Heading,
  Stack,
  Divider,
  Icon,
  
} from "native-base";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Buttons = () => {
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
        NativeBase Button
      </Heading>
      <Text>The Button component triggers an event or an action. Examples can be submitting forms and deleting a data point.</Text>
      <VStack
        w="100%"
        space={4}
        px="2"
        mt="4"
        alignItems="center"
        justifyContent="center"
      >
        {/* Solid */}
        <Heading size="md">Solid</Heading>
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "row",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button size="sm">PRIMARY</Button>
          <Button size="sm" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" isDisabled>
            DISABLED
          </Button>
        </Stack>

        <Divider w="100%" />

        <Heading size="md">Subtle</Heading>

        {/* Subtle */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "row",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button size="sm" variant="subtle">
            PRIMARY
          </Button>
          <Button size="sm" variant="subtle" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="subtle" isDisabled>
            DISABLED
          </Button>
        </Stack>
        <Divider />
        <Heading size="md">Outline</Heading>

        {/* Outline */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "row",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button size="sm" variant="outline">
            PRIMARY
          </Button>
          <Button size="sm" variant="outline" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="outline" isDisabled>
            DISABLED
          </Button>
        </Stack>
        <Divider w="100%" />

        <Heading size="md">Link</Heading>

        {/* Link */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "row",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button size="sm" variant="link">
            PRIMARY
          </Button>
          <Button size="sm" variant="link" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="link" isDisabled>
            DISABLED
          </Button>
        </Stack>
        <Divider w="100%" />

        <Heading size="md">Ghost</Heading>

        {/* Ghost */}
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "row",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button size="sm" variant="ghost">
            PRIMARY
          </Button>
          <Button size="sm" variant="ghost" colorScheme="secondary">
            SECONDARY
          </Button>
          <Button size="sm" variant="ghost" isDisabled>
            DISABLED
          </Button>
        </Stack>

        <Divider w="100%" />
      </VStack>

      <Heading size="lg" color="tertiary.600" my="6">
        Button Loading
      </Heading>

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

      <Heading size="lg" color="tertiary.600" my="6">
        Button Icon
      </Heading>

      <Stack
        direction={{
          base: "row",
          md: "row",
        }}
        space={4}
      >
        <Button
          leftIcon={
            <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
          }
        >
          Upload
        </Button>
        <Button
          variant="subtle"
          endIcon={
            <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
          }
        >
          Download
        </Button>
      </Stack>
    </Container>
  );
};

export default Buttons;
