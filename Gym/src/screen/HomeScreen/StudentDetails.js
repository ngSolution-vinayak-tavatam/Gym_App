import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const StudentDetails = () => {
  return (
    <View className="m-2">
      <View className="items-center m-10">
        <MaterialCommunityIcons name={"account-search"} size={60} color={"black"}/>
        <Text className="font-bold m-2">Student Details</Text>

      </View>
      
      <View className="m-5">
        <Text className="font-bold">Phone Number</Text>
        <TextInput className="my-3 px-4 bg-slate-200 h-10 rounded-lg" keyboardType="numeric" placeholder='Phone No.'/>
      </View>
      <View className="items-center m-10">
        <Text className="bg-blue-400 w-20 font-bold text-center p-3 rounded-xl">Search</Text>
      </View>
    </View>
  )
}

export default StudentDetails