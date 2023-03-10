import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import formatCurrency from "../helpers/formatCurrency";
import formatDate from "../helpers/formatDate";

const iconDictionary = {
  Savings: require("../assets/img/icono_ahorro.png"),
  Food: require("../assets/img/icono_comida.png"),
  Debts: require("../assets/img/icono_gastos.png"),
  Home: require("../assets/img/icono_casa.png"),
  Leisure: require("../assets/img/icono_ocio.png"),
};

const Expense = ({ expense, setModal, setSelectedExpense }) => {
  const { name, category, quantity, date } = expense;

  const handleEditExpense = () => {
    setSelectedExpense(expense);
    setModal({ visible: true, type: "editExpense" });
  };

  return (
    <Pressable onPress={() => handleEditExpense()}>
      <View className="bg-white rounded-lg mx-4 p-4 flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <View className="items-center w-[50px]">
            <Image
              className="h-10 w-10"
              source={iconDictionary[expense.category]}
            />
            <Text className="text-gray-500 font-semibold mt-1">{category}</Text>
          </View>

          <View className="ml-4 flex-row items-center w-[70px]">
            <View>
              <Text className=" text-blue-800 font-semibold ">{name}</Text>
            </View>
          </View>
        </View>

        <Text className="text-gray-500 font-semibold ">{formatDate(date)}</Text>

        <Text className="text-lg text-blue-800 font-semibold">
          {formatCurrency(quantity)}
        </Text>
      </View>
    </Pressable>
  );
};

export default Expense;
