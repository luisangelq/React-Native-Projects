import React from "react";
import {StyleSheet, SafeAreaView, View, Text } from "react-native";

const Header = () => {
  return (
    <SafeAreaView className="bg-blue-200" style={styles.AndroidSafeArea}>
      <Text className="text-2xl text-center text-blue-800 py-4">
      Budget <Text className="font-bold">Control</Text>{" "}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? 40 : 0,
    },
  });

export default Header;
