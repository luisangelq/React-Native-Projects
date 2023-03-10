import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setModal,
  categories,
  setSelectedExpense,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("newest");
  const [quantityFilter, setQuantityFilter] = useState("");

  const [filterExpenses, setFilterExpenses] = useState([]);

  const filterCategory = () => {
    if (categoryFilter === "") {
      setFilterExpenses(expenses);
      return;
    }
    const newFilter = expenses.filter(
      (expense) => expense.category === categoryFilter
    );
    setFilterExpenses(newFilter);
  };

  const filterDate = (date) => {
    if (date === "newest") {
      const newFilter = expenses.sort((a, b) => b.date - a.date);
      setFilterExpenses(newFilter);
      return;
    }

    if (date === "oldest") {
      const newFilter = expenses.sort((a, b) => a.date - b.date);
      setFilterExpenses(newFilter);
      return;
    }
  };

  const filterQuantity = (quantity) => {
    if (quantity === "highest") {
      const newFilter = expenses.sort((a, b) => b.quantity - a.quantity);
      setFilterExpenses(newFilter);
      return;
    }
    if (quantity === "lowest") {
      const newFilter = expenses.sort((a, b) => a.quantity - b.quantity);
      setFilterExpenses(newFilter);
      return;
    }
  };

  useEffect(() => {
    filterCategory();
  }, [categoryFilter, expenses]);

  useEffect(() => {
    filterDate("newest");
  }, []);

  return (
    <View className="my-28 bg-gray-100 mx-4">
      <Text className="text-center text-2xl font-semibold text-blue-800 mt-4">
        {filterExpenses.length > 0 ? "Expenses" : "No expenses"}
      </Text>

      <View className="bg-white mx-4 flex-row justify-between px-2 py-2 items-center relative rounded-lg mt-4 mb-1">
        {Platform.OS === "ios" ? (
          <Pressable
            className="border border-gray-200 px-2 py-1 rounded-lg z-20"
            onPress={() => setShowPicker(!showPicker)}
          >
            <Text className="text-center text-gray-400 font-semibold">
              Category
            </Text>
          </Pressable>
        ) : (
          <View className="w-5/12">
            <Picker
              selectedValue={categoryFilter}
              onValueChange={(itemValue, itemIndex) => setCategoryFilter(itemValue)}
            >
              <Picker.Item label="Category" value="" style={{ fontSize: 12 }} />
              {categories.map((category) => (
                <Picker.Item
                  key={category.id}
                  label={category.name}
                  value={category.name}
                />
              ))}
            </Picker>
          </View>
        )}

        {Platform.OS === "ios" && showPicker && (
          <View className="absolute w-48 h-48 border border-gray-400 bg-gray-200 opacity-80 z-10 bottom-10 left-2 rounded-lg ">
            <Pressable
              className="absolute right-3 z-20"
              onPress={() => setShowPicker(false)}
            >
              <Text className="text-3xl text-gray-500 font-semibold">x</Text>
            </Pressable>
            <Picker
              selectedValue={categoryFilter}
              onValueChange={(itemValue, itemIndex) =>
                setCategoryFilter(itemValue)
              }
            >
              <Picker.Item label="All" value="" />
              {categories.map((category) => (
                <Picker.Item
                  key={category.id}
                  label={category.name}
                  value={category.name}
                />
              ))}
            </Picker>
          </View>
        )}

        <Pressable
          // show from newest to oldest
          onPress={() => {
            if (dateFilter === "newest") {
              setDateFilter("oldest");
              filterDate("oldest");
            } else if (dateFilter === "oldest") {
              setDateFilter("newest");
              filterDate("newest");
            }
          }}
        >
          <Text className={ Platform.OS === "ios" ? "text-center text-gray-400 font-semibold ml-10" : "text-center text-gray-400 font-semibold"}>
            Date {dateFilter === "newest" ? "▲" : "▼"}
          </Text>
        </Pressable>

        <Pressable
          // show from highest to lowest
          onPress={() => {
            if (quantityFilter === "") {
              setQuantityFilter("highest");
              filterQuantity("highest");
            } else if (quantityFilter === "highest") {
              setQuantityFilter("lowest");
              filterQuantity("lowest");
            } else if (quantityFilter === "lowest") {
              setDateFilter("newest");
              filterDate("newest");
              setQuantityFilter("");
            }
          }}
        >
          <Text className="text-center text-gray-400 font-semibold ">
            Quantity{" "}
            {quantityFilter === "highest" || quantityFilter === "" ? "▲" : "▼"}
          </Text>
        </Pressable>
      </View>

      {expenses.length > 0 &&
        filterExpenses.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            setModal={setModal}
            setSelectedExpense={setSelectedExpense}
          />
        ))}
    </View>
  );
};

export default ExpensesList;
