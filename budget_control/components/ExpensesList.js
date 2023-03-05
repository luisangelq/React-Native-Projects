import React from "react";
import { View, Text } from "react-native";

const ExpensesList = ({ expenses }) => {
  return (
    <View className="mt-20">
      {expenses.length > 0 ? (
        <Text className="text-center text-2xl font-semibold text-blue-800">
          Expenses
        </Text>
      ) : (
        <Text className="text-center text-2xl font-semibold text-blue-800">
          No expenses
        </Text>
      )}

      {expenses.length > 0 &&
        expenses.map((expense) => (
          <View
            className="bg-white shadow-lg rounded-lg mx-4 my-4 p-4"
            key={expense.id}
          >
            <Text className="text-lg text-blue-800 font-semibold">
              {expense.name}
            </Text>
            <Text className="text-lg text-blue-800 font-semibold">
              ${expense.quantity}
            </Text>
          </View>
        ))}
    </View>
  );
};

export default ExpensesList;
