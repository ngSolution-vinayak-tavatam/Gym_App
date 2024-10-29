import { View, Text } from "react-native";
import React from "react";
import { useStudent } from '../screen/context/StudentContext'


const StudentInformation = () => {

  const { studentData } = useStudent();

  if (!studentData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Student Data Available</Text>
      </View>
    );
  }


  return (
    <View>
      <View className="items-center mt-10 ">
        <View className="bg-sky-300  rounded-full h-32 w-32"> 
        </View>
        {/* <MaterialCommunityIcons name={"card-account-details-outline"} size={20} color={"black"}/> */}
      </View>
      <View className="m-3 bg-gray-200 h-80 rounded-t-full items-center">
        
        <Text className="mt-5">Name</Text>
        <Text className="font-bold text-base pb-2">{studentData.studentname} </Text>
        
        <Text className="">DOB</Text>
        <Text className="font-bold text-base pb-2"> {studentData.studentemail}</Text>
        
        <Text className="">Phone Number</Text>
        <Text className="font-bold text-base pb-2">1234567890</Text>
        
        <Text className="">Address</Text>
        <Text className="font-bold text-base pb-2"> New Pachha Peth </Text>

        <Text className="">Memberships</Text>
        <Text className="font-bold text-base pb-2"> 20 Days left </Text>
        
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default StudentInformation;
