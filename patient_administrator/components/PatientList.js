import React from "react";
import { View, Text, Pressable } from "react-native";
import formatedDate from "../hooks/formatDate";

const PatientList = ({
  item,
  setModalVisible,
  setSelectAppointment,
  editAppointment,
  deleteAppointment,
  setModalInfo,
}) => {
  return (

    <Pressable
      onPress={() => {
        setModalInfo(true);
        setSelectAppointment(item);
      }}
    >
      <View className="w-full bg-slate-300 flex flex-row justify-between align-center rounded-lg p-2 mt-2">
        <View>
          <Text className="mb-2 text-lg">
            Name: <Text className="font-bold">{item.owner}</Text>
          </Text>

          <Text>
            Date:{" "}
            <Text className="font-bold">
              {formatedDate(new Date(item.date))}
            </Text>
          </Text>
        </View>

        <View className="flex flex-row items-center gap-2">
          <Pressable
            className="bg-purple-400 active:bg-purple-600 rounded-lg p-2 "
            onPress={() => {
              setModalVisible(true);
              editAppointment(item.id);
            }}
          >
            <Text className="text-sm text-center font-bold text-white">
              Edit
            </Text>
          </Pressable>

          <Pressable
            className="bg-red-400 active:bg-red-600 rounded-lg p-2"
            onPress={() => deleteAppointment(item.id)}
          >
            <Text className="text-sm text-center font-bold text-white">
              Delete
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default PatientList;
