import React from "react";

import {
  Container,
  Heading,
  View,
  Text,
  VStack,
  Slider,
  Switch,
  Divider,
} from "native-base";

const Sliders = () => {
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
        NativeBase Slider and Switch
      </Heading>
      <Text mx="2" my="4">
        Select creates a dropdown list of items with the selected item in closed
        view.
      </Text>

      <VStack w="3/4" maxW="300" space={4}>
        <Slider defaultValue={70} colorScheme="red">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb
            style={{
              backgroundColor: "orange",
            }}
          />
        </Slider>
        <Slider defaultValue={30} colorScheme="emerald" size="md">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={50} colorScheme="indigo" size="lg">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </VStack>

      <Divider my="4" />
      <Switch defaultIsChecked colorScheme="primary" />
      <Switch defaultIsChecked colorScheme="secondary" />
      <Switch defaultIsChecked colorScheme="emerald" />
    </Container>
  );
};

export default Sliders;
