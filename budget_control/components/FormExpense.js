import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../GlobalStyles";

const FormExpense = ({
  setModal,
  handleExpense,
  selectedExpense,
  categories,
  setSelectedExpense,
  deleteExpense,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const resetForm = () => {
    setModal({ visible: false, type: "" });
    setSelectedExpense({});
    setName("");
    setQuantity("");
    setCategory("");
  };

  useEffect(() => {
    if (selectedExpense?.id) {
      setName(selectedExpense.name);
      setQuantity(selectedExpense.quantity);
      setCategory(selectedExpense.category);
    }
  }, [selectedExpense]);

  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-center text-blue-800 my-4">
        {selectedExpense.id ? "Edit expense" : "Add new expense"}
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
          <Picker
            itemStyle={styles2.itemStyle}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            {categories.map((category) => (
              <Picker.Item
                key={category.id}
                label={category.name}
                value={category.name}
              />
            ))}
          </Picker>
        </View>

        <Pressable
          className="bg-white py-2 rounded-lg mt-10 active:bg-blue-50 border border-blue-400"
          onPress={() => {
            handleExpense({
              id: selectedExpense.id ? selectedExpense.id : Date.now(),
              date: new Date(),
              name,
              quantity: Number(quantity),
              category,
            });
          }}
        >
          <Text className="text-center text-lg text-blue-800 font-bold">
            {selectedExpense.id ? "Save expense" : "Add expense"}
          </Text>
        </Pressable>

        {selectedExpense.id ? (
          <Pressable
            className="bg-white py-2 rounded-lg mt-2 active:bg-blue-50 border border-red-400"
            onPress={() => {
              Alert.alert(
                "Delete expense",
                "Are you sure you want to delete this expense?",
                [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Delete",
                    onPress: () => deleteExpense(selectedExpense.id),
                  },
                ]
              );
            }}
          >
            <Text className="text-center text-lg text-red-400 font-bold">
              Delete Expense
            </Text>
          </Pressable>
        ) : null}
      </View>

      {Platform.OS === "android" ? (
        <Pressable
          className="bg-red-400 py-2 rounded-lg mt-10 mx-4 fixed bottom-[-220px] active:bg-red-600 w-11/12"
          onPress={() => resetForm()}
        >
          <Text className="text-center text-lg text-white font-bold">
            Cancel
          </Text>
        </Pressable>
      ) : (
        <Pressable
          className="bg-red-400 py-2 rounded-lg mt-10 mx-4 absolute bottom-20 active:bg-red-600 w-11/12"
          onPress={() => resetForm()}
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
