import { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import formatedDate from "../hooks/formatDate";

const Form = ({
  modalVisible,
  setModalVisible,
  appointments,
  setAppointments,
  selectAppointment,
  setSelectAppointment,
}) => {
  const [id, setId] = useState("");
  const [owner, setOwner] = useState("");
  const [pet, setPet] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    if (selectAppointment.id) {
      setId(selectAppointment.id);
      setOwner(selectAppointment.owner);
      setPet(selectAppointment.pet);
      setEmail(selectAppointment.email);
      setPhone(selectAppointment.phone);
      setDate(new Date(selectAppointment.date));
    }
  }, []);

  const resetForm = () => {
    setId("");
    setOwner("");
    setPet("");
    setEmail("");
    setPhone("");
    setDate(new Date());
    setSelectAppointment({});
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShowPicker(true);
    setMode(currentMode);
  };

  const handleAppointment = () => {
    if ([owner, pet, email, phone].includes("")) {

      Alert.alert("Error", "All fields are required", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);

      return;
    }

    const newAppointment = {
      owner,
      pet,
      email,
      phone,
      date: date.getTime(),
    };

    if (selectAppointment.id) {
      newAppointment.id = selectAppointment.id;

      const newAppointments = appointments.map((appointment) =>
        selectAppointment.id === appointment.id ? newAppointment : appointment
      );

      setAppointments(newAppointments);

      Alert.alert("Success", "Appointment saved", [
        {
          text: "OK",
          onPress: () => {
            setModalVisible(false);
            resetForm();
          },
        },
      ]);

      return;
    } else {
      newAppointment.id = Date.now();
      setAppointments((appointments) => [...appointments, newAppointment]);

      Alert.alert("Success", "Appointment created", [
        {
          text: "OK",
          onPress: () => {
            setModalVisible(false);
            resetForm();
          },
        },
      ]);
    }
  };

  return (
    <Modal animationType="fade" visible={modalVisible} className="">
      <SafeAreaView className="flex-1 bg-purple-600">
        <ScrollView className="mt-5">
          <Text className="text-center text-2xl font-bold text-white">
            {selectAppointment.id ? "Edit" : "New"} Appointment
          </Text>

          <View className="mt-5 px-4">
            <Text className="text-white">Owner name</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-lg py-1 px-2 mt-2"
              value={owner}
              placeholder="Owner name"
              placeholderTextColor="#BABBBB"
              onChangeText={(text) => setOwner(text)}
            />
          </View>

          <View className="mt-5 px-4">
            <Text className="text-white">Pet name</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-lg py-1 px-2 mt-1"
              value={pet}
              placeholder="Pet name"
              placeholderTextColor="#BABBBB"
              onChangeText={(text) => setPet(text)}
            />
          </View>

          <View className="mt-5 px-4">
            <Text className="text-white">Email</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-lg py-1 px-2 mt-2"
              value={email}
              placeholder="Email"
              placeholderTextColor="#BABBBB"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View className="mt-5 px-4">
            <Text className="text-white">Phone</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-lg py-1 px-2 mt-2"
              value={phone}
              placeholder="Phone"
              placeholderTextColor="#BABBBB"
              keyboardType="phone-pad"
              onChangeText={(text) => setPhone(text)}
            />
          </View>

          <View className="mt-5 px-4">
            <Text className="text-white text-lg">
              Select appointment date:{" "}
              <Text className="text-white font-bold">{formatedDate(date)}</Text>{" "}
            </Text>
          </View>

          <View className="flex items-center justify-center mt-5 bg-white mx-4 rounded-lg">
            {Platform.OS === "ios" && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="datetime"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
          </View>

          <View className="flex items-center justify-center mx-4 rounded-lg">
            {Platform.OS === "android" && (
              <View className="flex flex-row gap-2">
                <Pressable
                  onPress={() => showMode("date")}
                  className="
                  w-5/12
               bg-white active:bg-gray-200 rounded-lg p-2 mt-5
            "
                >
                  <Text className="text-black text-center">Select date</Text>
                </Pressable>

                <Pressable
                  onPress={() => showMode("time")}
                  className="
                  w-5/12
               bg-white active:bg-gray-200 rounded-lg p-2 mt-5
            "
                >
                  <Text className="text-black text-center">Select time</Text>
                </Pressable>
              </View>
            )}

            {showPicker && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View className="text-center mt-10">
            <Pressable
              className="w-11/12 bg-white active:bg-gray-200 rounded-lg p-3 mt-5 mx-auto"
              onPress={() => handleAppointment()}
            >
              <Text className="text-sm text-center font-bold text-purple-600">
                {selectAppointment.id ? "Save" : "Create"}
              </Text>
            </Pressable>

            <Pressable
              className="w-11/12 bg-red-400 active:bg-red-600 rounded-lg p-3 mt-5 mx-auto"
              onPress={() => {
                setModalVisible(false);
                resetForm();
              }}
            >
              <Text className="text-sm text-center font-bold text-white">
                Cancel
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

export default Form;
