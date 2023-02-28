import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import formatedDate from "../hooks/formatDate";

const PatientInfo = ({
  selectAppointment,
  setSelectAppointment,
  setModalInfo,
}) => {
  return (
    <SafeAreaView>
      <Text className="text-center text-2xl font-bold text-purple-600 mt-5">
        Appointment Info
      </Text>

      <View className="mt-5 p-4 bg-slate-300 w-11/12 mx-auto rounded-md shadow-md">
        <Text className="text-purple-800 text-lg mb-2">
          Owner name:
          <Text className="font-bold"> {selectAppointment.owner}</Text>
        </Text>

        <Text className="text-purple-800 text-lg mb-2">
          Pet name:
          <Text className="font-bold"> {selectAppointment.pet}</Text>
        </Text>

        <Text className="text-purple-800 text-lg mb-2">
          Email:
          <Text className="font-bold"> {selectAppointment.email}</Text>
        </Text>

        <Text className="text-purple-800 text-lg mb-2">
          Phone:
          <Text className="font-bold"> {selectAppointment.phone}</Text>
        </Text>

        <Text className="text-purple-800 text-lg">
          Date:
          <Text className="font-bold">
            {" "}
            {formatedDate(new Date(selectAppointment.date))}
          </Text>
        </Text>
      </View>

      <View className="text-center mt-10">
        <Pressable
          className="w-11/12 bg-red-400 active:bg-red-600 rounded-lg p-3 mt-5 mx-auto"
          onPress={() => {
            setModalInfo(false);
            setSelectAppointment({});
          }}
        >
          <Text className="text-sm text-center font-bold text-white">
            Close
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PatientInfo;
