import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Platform } from "react-native";
import formatCurrency from "../helpers/formatCurrency";
import styles from "../GlobalStyles";

const ControlBudget = ({ budget, expenses, setModal }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  const calculateAvailable = () => {
    const totalExpenses = expenses.reduce(
      (total, expense) => total + expense.quantity,
      0
    );
    const available = budget - totalExpenses;
    setAvailable(available);
  };

  const calculateSpent = () => {
    const totalExpenses = expenses.reduce(
      (total, expense) => total + expense.quantity,
      0
    );
    setSpent(totalExpenses);
  };

  useEffect(() => {
    calculateAvailable();
    calculateSpent();
  }, []);

  return (
    <View className="bg-blue-200">
      <View
        className=" bg-white rounded-lg mx-4 p-8 translate-y-14 shadow"
        // apply shadow to iOS
        style={Platform.OS === "android" ? styles.androidShadow : null}
      >
        <Image
          className="mx-auto h-[200] w-[200]"
          source={require("../assets/img/grafico.jpg")}
        />

        <View className="bg-gray-100 mt-5 rounded-lg py-4">
          <View className=" my-2">
            <Text className="text-2xl text-center text-blue-500 ">Budget:</Text>
            <Text className="text-2xl text-center text-blue-500 font-bold">
              {formatCurrency(budget)}
            </Text>
          </View>

          <View className=" my-2">
            <Text className="text-2xl text-center text-green-500 ">
              Available:
            </Text>
            <Text className="text-2xl text-center text-green-500 font-bold">
              {formatCurrency(available)}
            </Text>
          </View>

          <View className=" my-2">
            <Text className="text-2xl text-center text-red-500 ">Spent:</Text>
            <Text className="text-2xl text-center text-red-500 font-bold">
              {formatCurrency(spent)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ControlBudget;
