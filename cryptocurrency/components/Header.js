import React from 'react'
import {
    Text,
} from 'native-base'
import { Platform } from 'react-native'

const Header = () => {
  return (
    <Text
        pt={
            Platform.OS === 'ios' ? 16 : 12
        }
        pb={6}
        bg="violet.700"
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
    >
        Crypto Tracker
    </Text>

  )
}

export default Header