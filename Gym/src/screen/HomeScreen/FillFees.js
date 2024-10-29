import { View, Text, TextInput } from 'react-native'
import React from 'react'
// import { Image } from 'expo-image';

const FillFees = () => {
  return (
    <View>
      <View className="items-center m-10">
        {/* <Image
          className="w-20 h-20"
         source={{ uri: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-fees-automotive-dealership-flaticons-flat-flat-icons.png' }}        
        /> */}
        <Text className="font-bold text-base m-2">Fees</Text>
      </View>
      <View className="m-5">
        <Text className="font-bold">Phone Number</Text>
        <TextInput className="my-3 px-4 bg-slate-200 h-10 rounded-lg" keyboardType="numeric" placeholder='Number'/>
      </View>
      <View className="items-center m-10">
        <Text className="bg-blue-400 w-20 font-bold text-center p-3 rounded-xl">Search</Text>
      </View>
    </View>
   
  )
}

export default FillFees