import { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  FlatList,
  Alert,
  Modal,
} from "react-native";

import Form from "./components/Form";
import PatientList from "./components/PatientList";
import PatientInfo from "./components/PatientInfo";

const App = () => {
  const [appointments, setAppointments] = useState([
    {
      date: new Date(),
      email: "luisangel@gmail.com",
      id: 1677504480924,
      owner: "Luis Angel",
      pet: "Pishi",
      phone: "3326264356",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [selectAppointment, setSelectAppointment] = useState({});

  const editAppointment = (id) => {
    const appointment = appointments.find((item) => item.id === id);
    setSelectAppointment(appointment);
  };

  const deleteAppointment = (id) => {
    const appointment = appointments.filter((item) => item.id !== id);

    Alert.alert(
      "Delete Appointment",
      "Are you sure you want to delete this appointment?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setAppointments(appointment);
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView
      style={styles.AndroidSafeArea}
      className="flex items-center justify-center"
    >
      <Text className="text-2xl">Appointment Administrator</Text>
      <Text className="text-2xl font-bold text-purple-600">Veterinary</Text>

      <Pressable
        className="w-11/12 bg-purple-600 active:bg-purple-800 rounded-lg p-3 mt-5 "
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-sm text-center font-bold text-white">
          New Appointment
        </Text>
      </Pressable>

      {appointments.length > 0 ? (
        <FlatList
          className="mt-10 flex-1 w-11/12"
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PatientList
              item={item}
              setModalVisible={setModalVisible}
              setSelectAppointment={setSelectAppointment}
              editAppointment={editAppointment}
              deleteAppointment={deleteAppointment}
              setModalInfo={setModalInfo}
            />
          )}
        />
      ) : (
        <Text className="text-2xl font-bold text-purple-600 mt-12">
          No Appointments
        </Text>
      )}

      {modalVisible && (
        <Form
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          appointments={appointments}
          setAppointments={setAppointments}
          selectAppointment={selectAppointment}
          setSelectAppointment={setSelectAppointment}
        />
      )}

      <Modal animationType="slide" visible={modalInfo}>
        <PatientInfo
          selectAppointment={selectAppointment}
          setSelectAppointment={setSelectAppointment}
          setModalInfo={setModalInfo}
        />
      </Modal>
    </SafeAreaView>
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

export default App;
