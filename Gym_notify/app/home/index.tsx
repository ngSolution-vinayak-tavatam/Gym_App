import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Home = () => {
  return (
    <View className="my-20">
    <TouchableOpacity onPress={()=>{router.push("/home/StudentRegistration")}} className="items-center p-4 m-5 bg-blue-200 rounded">
      <Text className="font-bold text-base">Student Registration</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{router.push("/home/StudentDetails")}} className="items-center p-4 m-5 bg-blue-200 rounded">
      <Text className="font-bold text-base">Student Details</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{router.push("/home/FillFees")}} className="items-center p-4 m-5 bg-blue-200 rounded">
      <Text className="font-bold text-base">Student Fees</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{}} className="items-center p-4 m-5 bg-blue-200 rounded">
      <Text className="font-bold text-base">MemberShip Expiries</Text>
    </TouchableOpacity>
    
    
  </View>
  )
}

export default Home