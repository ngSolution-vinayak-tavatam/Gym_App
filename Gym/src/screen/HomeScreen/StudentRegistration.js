import { View, Text, TextInput, Image, ScrollView, Alert  } from "react-native";
import React from "react";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useStudent } from '../context/StudentContext';

// import { Camera } from 'react-native-camera';
// import { PermissionsAndroid, Platform } from 'react-native';
// import React, { useState, useEffect } from 'react';

// const [hasPermission, setHasPermission] = useState();
// const [cameraRef, setCameraRef] = useState();
// const [photoUri, setPhotoUri] = useState();

// useEffect(() => {
//   (async () => {
//     if (Platform.OS === 'android') {
//       const permission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'We need your permission to access the camera.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       setHasPermission(permission === PermissionsAndroid.RESULTS.GRANTED);
//     } else {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     }
//   })();
// }, []);

// const capturePhoto = async () => {
//   if (cameraRef) {
//     const { uri } = await cameraRef.takePictureAsync();
//     setPhotoUri(uri);
//   }
// };

const data = [
  { label: "Male", value: "1" },
  { label: "Female", value: "2" },
  { label: "Other", value: "3" },
];

const data1 = [
  { label1: "1 Month", value: "4" },
  { label1: "3 Month", value: "5" },
  { label1: "6 Month", value: "6" },
  { label1: "1 Year", value: "7" },
];

const StudentRegistration = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [studentname, setStudentname] = useState("");
  const [studentemail, setStudentemail] = useState("");
  const [studentphoneno, setStudentphoneno] = useState("");
  const [studentdob, setStudentdob] = useState("");
  const [studentgender, setStudentgender] = useState("");
  const [studentaddress, setStudentaddress] = useState("");
  const [studentmemership, setStudentmemership] = useState("");
  const [studentphoto, setStudentphoto] = useState("");
  const { setStudentData } = useStudent();

  const handleRegister = () => {
    if (!studentname || !studentemail) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Save data to context
    setStudentData({ studentname, studentemail });

  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={{
            position: "absolute",
            backgroundColor: "white",
            left: 22,
            top: 8,
            zIndex: 999,
            paddingHorizontal: 8,
            fontSize: 12,
            color: isFocus ? "blue" : "black",
          }}
        >
          Dropdown label
        </Text>
      );
    }
    return null;
  };

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
            value={studentname}
            onChangeText={setStudentname}
          />
        </View>
        <View className="my-2">
          <Text className="font-bold">Email address</Text>
          <TextInput 
          className="bg-gray-200 mt-1 p-2" 
          placeholder="Email" 
          value={studentemail}
          onChangeText={setStudentemail}
          />
        </View>
        <View className="my-2">
          <Text className="font-bold">Phone Number</Text>
          <TextInput
            className="bg-gray-200 mt-1 p-2"
            keyboardType="numeric"
            placeholder="Phone No."
          />
        </View>
        <View className="my-2">
          <Text className="font-bold">Date Of Birth</Text>
        </View>
        <View className="my-2">
          <Text className="font-bold">Gender</Text>
          {/* ***** ***** ***** Dropdown  **** **** ***** */}

          {/* <View style={{ backgroundColor: "white", padding: 16 }}>
            {renderLabel()}
            <Dropdown
              style={{
                height: 35,
                borderColor: "gray",
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
                borderColor: isFocus ? "blue" : "gray",
              }}
              // placeholderStyle={{ fontSize: 13 }}
              // selectedTextStyle={{ fontSize: 13 }}
              inputSearchStyle={{ height: 10, fontSize: 12 }}
              iconStyle={{ width: 20, height: 10 }}
              data={data}
              // search
              maxHeight={100}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Gender" : "..."}
              // searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              // renderLeftIcon={() => (
              //   <AntDesign
              //     style={{ marginRight: 5 }}
              //     color={isFocus ? "blue" : "black"}
              //     name="Safety"
              //     size={20}
              //   />
              // )}
            />
          </View> */}

          <View>
            <Dropdown
              style={{
                height: 40, // Adjusted height if needed
                borderColor: isFocus ? "blue" : "gray",
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
              inputSearchStyle={{ height: 30, fontSize: 12 }} // Adjusted height if needed
              iconStyle={{ width: 20, height: 20 }} // Adjusted height if needed
              data={data}
              maxHeight={120} // Adjusted maxHeight if needed
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Gender" : "..."}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>

        <View className="my-2">
          <Text className="font-bold">Address</Text>
          <TextInput className="bg-gray-200 mt-1 p-2" placeholder="Address" />
        </View>

        <View className="my-2">
          <Text className="font-bold">Membership Information</Text>

          <View>
            <Dropdown
              style={{
                height: 40, // Adjusted height if needed
                borderColor: isFocus ? "blue" : "gray",
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
              inputSearchStyle={{ height: 30, fontSize: 12 }} // Adjusted height if needed
              iconStyle={{ width: 20, height: 20 }} // Adjusted height if needed
              data={data1}
              maxHeight={120} // Adjusted maxHeight if needed
              labelField="label1"
              valueField="value"
              placeholder={!isFocus ? "Membership" : "..."}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>

        <View className="bg-orange-200 my-2 h-20">
          {/* <View className="my-2">
        <Text className="font-bold">Candidate Photo</Text>
        <View className="bg-orange-200 my-2 h-20 justify-center items-center">
          {photoUri ? (
            <Image
              source={{ uri: photoUri }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Text>Here is the photo of the candidate</Text>
          )}
        </View>
        <Button title="Capture Photo" onPress={capturePhoto} />
      </View> */}

          <Text> here is photo of candidate</Text>
        </View>

        <View className="items-center m-5">
          <Text className="bg-blue-400 w-16 text-center p-2 rounded " onPress={handleRegister}>
            Register
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default StudentRegistration;
