import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View className="my-20">
      <TouchableOpacity onPress={()=>{navigation.navigate("StudentRegistration")}} className="items-center p-4 m-5 bg-blue-200 rounded">
        <Text className="font-bold text-base">Student Registration</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("StudentDetails")}} className="items-center p-4 m-5 bg-blue-200 rounded">
        <Text className="font-bold text-base">Student Details</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("FillFees")}} className="items-center p-4 m-5 bg-blue-200 rounded">
        <Text className="font-bold text-base">Student Fees</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("StudentRegistration")}} className="items-center p-4 m-5 bg-blue-200 rounded">
        <Text className="font-bold text-base">Overdue</Text>
      </TouchableOpacity>
      
      
    </View>
  )
}

export default HomeScreen

