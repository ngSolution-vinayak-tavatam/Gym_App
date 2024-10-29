import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Button, StyleSheet, TouchableOpacity, Modal } from "react-native";

const GenderSelect = [
  { label: "Male", value: "1" },
  { label: "Female", value: "2" },
  { label: "Other", value: "3" },
];

const MembershipSelect = [
  { label1: "1 Month", value: "4" },
  { label1: "3 Month", value: "5" },
  { label1: "6 Month", value: "6" },
  { label1: "1 Year", value: "7" },
];
const StudentRegistration = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = () => {
    console.log(Name, Email, Phone, Address, Dob, gender);
  };
  ////----------------------------
  const [modalVisible, setModalVisible] = useState(false);

  ///---------camera----------------
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <ScrollView>
      <View className="items-center m-5">
        {/* <Image className="w-10 h-10" source={require('../src/images/icons8-registration.png')} /> */}
        <Image
          className="w-16 h-16"
          source={{
            uri: "https://img.icons8.com/color/96/edit-user-male--v1.png",
          }}
        />
        <Text className="font-bold m-2">Student Registration</Text>
      </View>
      <View className="m-2">
        <View className="my-2">
          <Text className="font-bold">Full Name</Text>
          <TextInput
            className="bg-gray-200 mt-1 p-2"
            placeholder="Full Name"
            value={Name}
            onChangeText={setName}
          />
        </View>
        <View className="my-2">
          <Text className="font-bold">Email address</Text>
          <TextInput
            className="bg-gray-200 mt-1 p-2"
            placeholder="Email"
            value={Email}
            onChangeText={setEmail}
          />
        </View>
        <View className="my-2">
          <Text className="font-bold">Phone Number</Text>
          <TextInput
            className="bg-gray-200 mt-1 p-2"
            keyboardType="numeric"
            placeholder="Phone No."
            value={Phone}
            onChangeText={setPhone}
          />
        </View>
        <View className="my-2">
          <Text className="font-bold">Date Of Birth</Text>
        </View>
        <View className="my-2">
          <Text className="font-bold">Gender</Text>
          <View>
            <Text>Dropdown</Text>
          </View>
        </View>

        <View className="my-2">
          <Text className="font-bold">Address</Text>
          <TextInput className="bg-gray-200 mt-1 p-2" placeholder="Address" />
        </View>

        <View className="my-2">
          <Text className="font-bold">Membership Information</Text>

          <View>
            <Text>Dropdrown</Text>
          </View>
        </View>

        <View className="bg-orange-200 my-2 h-20">
          <Text> here is photo of candidate</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "gray",
              padding: 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "black" }}>Open Camera</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.container}>
              <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={toggleCameraFacing}
                  >
                    <Text style={styles.text}>Flip Camera</Text>
                  </TouchableOpacity>
                </View>
              </CameraView>
            </View>
          </Modal>
        </View>

        <View className="items-center m-5">
          <Text
            className="bg-blue-400 w-16 text-center p-2 rounded "
            onPress={handleRegister}
          >
            Register
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default StudentRegistration;
