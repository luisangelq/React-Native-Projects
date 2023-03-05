import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../GlobalStyles";

const FormExpense = ({ setModal, handleExpense }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("ahorro");

  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-center text-blue-800 my-4">
        Add new expense
      </Text>
      <View
        style={Platform.OS === "android" ? styles.androidShadow : null}
        className="bg-blue-200 mx-4 p-4 rounded-lg shadow-lg"
      >
        <Text className="text-lg text-blue-800 font-semibold ml-2">
          Expense name
        </Text>
        <TextInput
          style={Platform.OS === "android" ? styles.androidShadow : null}
          className="border border-gray-200 bg-white rounded-lg p-2 mt-2 shadow"
          placeholder="Expense name (e.g. Food)"
          keyboardType="default"
          value={name}
          onChangeText={(name) => setName(name)}
        />

        <Text className="mt-5 text-lg text-blue-800 font-semibold ml-2">
          How much?
        </Text>

        <TextInput
          style={Platform.OS === "android" ? styles.androidShadow : null}
          className="border border-gray-200 bg-white rounded-lg p-2 mt-2 shadow "
          placeholder="Expense name (e.g. Food)"
          keyboardType="numeric"
            value={quantity.toString()}
          onChangeText={(quantity) => setQuantity(quantity)}
        />

        <Text className="mt-5 mb-2 text-lg text-blue-800 font-semibold ml-2">
          Category
        </Text>

        <View className="bg-white border border-gray-200 rounded-lg shadow">
          {Platform.OS === "android" ? (
            <Picker
              itemStyle={styles2.itemStyle}
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Alimentación" value="alimentacion" />
              <Picker.Item label="Auto" value="auto" />
              <Picker.Item label="Belleza" value="belleza" />
              <Picker.Item label="Casa" value="casa" />
              <Picker.Item label="Cine" value="cine" />
            </Picker>
          ) : (
            <Picker
              itemStyle={styles2.itemStyle}
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Ahorro" value="ahorro" />
              <Picker.Item label="Alimentación" value="alimentacion" />
              <Picker.Item label="Auto" value="auto" />
              <Picker.Item label="Belleza" value="belleza" />
              <Picker.Item label="Casa" value="casa" />
              <Picker.Item label="Cine" value="cine" />
            </Picker>
          )}
        </View>

        <Pressable
          className="bg-white py-2 rounded-lg mt-10 active:bg-blue-50 border border-blue-400"
          onPress={() => {
            handleExpense({
              id: new Date().getTime(),
              date: new Date(),
              name,
              quantity: Number(quantity),
              category,
            });
          }}
        >
          <Text className="text-center text-lg text-blue-800 font-bold">
            Add expense
          </Text>
        </Pressable>
      </View>

      {Platform.OS === "android" ? (
        <Pressable
          className="bg-red-400 py-2 rounded-lg mt-10 mx-4 fixed bottom-[-220px] active:bg-red-600 w-11/12"
          onPress={() => setModal({ visible: false, type: "" })}
        >
          <Text className="text-center text-lg text-white font-bold">
            Cancel
          </Text>
        </Pressable>
      ) : (
        <Pressable
          className="bg-red-400 py-2 rounded-lg mt-10 mx-4 absolute bottom-20 active:bg-red-600 w-11/12"
          onPress={() => setModal({ visible: false, type: "" })}
        >
          <Text className="text-center text-lg text-white font-bold">
            Cancel
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles2 = StyleSheet.create({
  itemStyle: {
    color: "#1C39A1",
  },
});

export default FormExpense;
