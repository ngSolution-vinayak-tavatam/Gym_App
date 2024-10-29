import { Text, TextInput, TouchableOpacity, View, Alert  } from "react-native";

import React, { useState } from "react";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    router.push('/home');
  }
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
      }}
    >
      <Text className="text-center mt-10">
        Don't have an account ? <Text className="text-blue-800">Sign Up</Text>
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default Login