import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, Pressable, Platform } from "react-native";
import styles from "../GlobalStyles";

const NewBudget = ({ handleBudget, budget, setBudget }) => {

  useEffect(() => {
    const setBudget = async () => {
      try {
        await AsyncStorage.setItem("budget", String(budget));
      } catch (error) {
        console.log(error);
      }
    };
    setBudget();
  }, [budget]);

  return (
    <View className="bg-blue-200 h-screen pt-44">
      <View
        className=" bg-slate-100 rounded-lg mx-4 p-4 shadow-lg shadow-black"
        // apply shadow to iOS
        style={ Platform.OS === "ios" ? styles.androidShadow : null }
      >
        <Text className="text-lg text-center text-blue-500 my-4">
          Define budget
        </Text>

        <TextInput
          className="border border-blue-300 rounded-lg p-2 mt-2 w-1/2 text-center mx-auto"
          placeholder="$100.00"
          keyboardType="numeric"
          value={budget === 0 ? "" : budget }
          onChangeText={(budget) => setBudget(budget)}
        />

        <Pressable
          className="bg-blue-400 py-2 rounded-lg mt-10"
          onPress={() => handleBudget(budget)}
        >
          <Text className="font-bold text-lg text-center text-white">Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewBudget;
