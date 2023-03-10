import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Platform } from "react-native";
import formatCurrency from "../helpers/formatCurrency";
import styles from "../GlobalStyles";
import CircularProgress from "react-native-circular-progress-indicator";

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

  const calculatePercentage = () => {
    const percentage = (spent / budget) * 100;
    return percentage;
  }

  useEffect(() => {
    calculateAvailable();
    calculateSpent();
  }, [expenses]);

  return (
    <View className="bg-blue-200 ">
      <View
        className=" bg-white rounded-lg mx-4 p-8 translate-y-14 shadow"
        // apply shadow to iOS
        style={Platform.OS === "android" ? styles.androidShadow : null}
      >
        <View className="mx-auto">
          <CircularProgress
            value={calculatePercentage() > 100 ? 100 : calculatePercentage()}
            radius={100}
            duration={1000}
            valueSuffix={"%"}
            inActiveStrokeColor={"#F1F2F5"}
            inActiveStrokeWidth={20}
            activeStrokeColor={"#2D78EF"}
            activeStrokeWidth={20}
            maxValue={100}

          />
        </View>

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
