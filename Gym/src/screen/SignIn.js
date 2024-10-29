import { Text, TextInput, TouchableOpacity, View, Alert  } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import React, { useState } from "react";

const USER_CREDENTIALS = {
  username: "user",
  password: "password",
};

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // if (
    //   username === USER_CREDENTIALS.username &&
    //   password === USER_CREDENTIALS.password
    // ) {
    //   Alert.alert("Login Successful", "Welcome back!");
    navigation.navigate("Home");
    // } else {
    //   Alert.alert("Login Failed", "Invalid username or password.");
    // }
  };

  return (
    <View className="my-20">
      <View>
        <Text className="text-center font-bold text-3xl mt-10">Sign In</Text>
      </View>
      <View className="flex-row p-3 bg-gray-200 mx-5 rounded-2xl items-center mt-10">
        <FontAwesome name={"user"} size={20} color={"black"} />
        <TextInput
          className="ml-4"
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View className="flex-row p-3 shadow-xl bg-gray-200 mx-5 rounded-2xl items-center mt-10">
        <Fontisto name={"locked"} size={20} color={"black"} />
        <TextInput
          className="ml-4"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
      </View>
      <TouchableOpacity
        className="items-center"
        // onPress={() => {
        //   navigation.navigate("Home");
        // }}
        onPress={handleLogin}
      >
        <Text className="text-base font-bold p-3 bg-blue-400 rounded-xl w-[30%] mx-5 mt-10 text-center">
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text className="text-center mt-10">
          Don't have an account ? <Text className="text-blue-800">Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
