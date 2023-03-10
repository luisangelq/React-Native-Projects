import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Alert, Pressable, Image, Modal, ScrollView } from "react-native";
import Header from "./components/Header";
import NewBudget from "./components/NewBudget";
import ControlBudget from "./components/ControlBudget";
import FormExpense from "./components/FormExpense";
import ExpensesList from "./components/ExpensesList";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);
  const [categories, setCategories] = useState([
    { id: 1, name: "Savings" },
    { id: 2, name: "Food" },
    { id: 3, name: "Debts" },
    { id: 4, name: "Home" },
    { id: 5, name: "Leisure" },
  ]);
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Aurrera",
      quantity: 400,
      date: new Date(),
      category: "Food",
    },
    {
      id: 2,
      name: "Loan",
      quantity: 255,
      date: new Date("2023-03-05T22:00:02.340Z"),
      category: "Debts",
    },
    {
      id: 3,
      name: "Shopping",
      quantity: 100,
      date: new Date("2023-03-07T22:00:02.340Z"),
      category: "Leisure",
    },
  ]);
  const [selectedExpense, setSelectedExpense] = useState({});
  const [modal, setModal] = useState({
    visible: false,
    type: "",
  });

  useEffect(() => {
    const getBudget = async () => {
      try {
        const getb = await AsyncStorage.getItem("budget") ?? 0;
        
        if (Number(getb) > 0) {
          setValidBudget(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBudget();
  }, []);

  useEffect(() => {
    if(validBudget) {
      const setBudget = async () => {
        try {
          await AsyncStorage.setItem("budget", budget);
        } catch (error) {
          console.log(error);
        }
      };
      setBudget();
    }
  }, [validBudget]);

  const handleBudget = async (budget) => {
    if (Number(budget) === 0 || isNaN(Number(budget)) || Number(budget) < 0) {
      Alert.alert("Error", "Invalid budget, set a valid number", [
        { text: "Ok" },
      ]);
      return;
    }
    setValidBudget(true);
  };

  

  const handleExpense = (expense) => {
    if (expense.name.trim() === "") {
      Alert.alert("Error", "All fields are required", [{ text: "Ok" }]);
      return;
    }
    if (Number(expense.quantity) <= 0) {
      Alert.alert("Error", "Invalid quantity, set a valid number", [
        { text: "Ok" },
      ]);
      return;
    }

    if (selectedExpense.id) {
      const newExpenses = expenses.map((item) =>
        item.id === selectedExpense.id ? expense : item
      );
      setExpenses(newExpenses);
      setModal({ visible: false, type: "" });
      setSelectedExpense({});
      return;
    }
    setExpenses([...expenses, expense]);
    setModal({ visible: false, type: "" });
  };

  const deleteExpense = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    setModal({ visible: false, type: "" });
    setSelectedExpense({});
  };

  return (
    <View className="flex-1">
      <ScrollView>
        <Header />

        {!validBudget ? (
          <NewBudget
            handleBudget={handleBudget}
            budget={budget}
            setBudget={setBudget}
          />
        ) : null}

        {validBudget ? (
          <View>
            <ControlBudget
              budget={budget}
              expenses={expenses}
              setModal={setModal}
            />

            <ExpensesList
              expenses={expenses}
              setModal={setModal}
              categories={categories}
              setSelectedExpense={setSelectedExpense}
            />
          </View>
        ) : null}
      </ScrollView>

      {validBudget ? (
        <Pressable
          className="absolute bottom-14 right-5"
          onPress={() =>
            setModal({
              visible: true,
              type: "newExpense",
            })
          }
        >
          <Image
            className="h-[60] w-[60]"
            source={require("./assets/img/nuevo-gasto.png")}
          />
        </Pressable>
      ) : null}

      {(modal.visible && modal.type === "newExpense") ||
      modal.type === "editExpense" ? (
        <Modal animationType="slide">
          <FormExpense
            setModal={setModal}
            selectedExpense={selectedExpense}
            setSelectedExpense={setSelectedExpense}
            categories={categories}
            handleExpense={handleExpense}
            deleteExpense={deleteExpense}
          />
        </Modal>
      ) : null}
    </View>
  );
};

export default App;
