import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  Modal,
} from "react-native";
import Header from "./components/Header";
import NewBudget from "./components/NewBudget";
import ControlBudget from "./components/ControlBudget";
import FormExpense from "./components/FormExpense";
import ExpensesList from "./components/ExpensesList";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Aurrera", quantity: 255, date: new Date(), category: "food" },
  ]);
  const [modal, setModal] = useState({
    visible: false,
    type: "",
  });

  const handleBudget = (budget) => {
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
    setExpenses([...expenses, expense]);
    setModal({ visible: false, type: "" });
  };

  console.log(expenses);

  return (
    <View className="flex-1">
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
           />
        </View>
      ) : null}

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

      {modal.visible && modal.type === "newExpense" ? (
        <Modal animationType="slide">
          <FormExpense setModal={setModal} handleExpense={handleExpense} />
        </Modal>
      ) : null}

      <StatusBar style="auto" />
    </View>
  );
};

export default App;
