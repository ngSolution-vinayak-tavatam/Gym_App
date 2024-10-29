import { TextInput, Text, View,TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import react,{useState} from "react";



const SignUp = ({navigation}) => {

    const [username,setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [phoneno, setPhoneno]=useState("");


  return (
    <View className="my-5">
            <View>
                <Text className="text-center font-bold text-3xl mt-10">Sign Up</Text>
            </View>
            <View className="flex-row p-3 bg-gray-200 mx-5 rounded-2xl items-center mt-10">
                <FontAwesome name={"user"} size={20} color={"black"}/>
                <TextInput className="ml-4" placeholder="Username"/>

            </View>
            <View className="flex-row p-3 shadow-xl bg-gray-200 mx-5 rounded-2xl items-center mt-10">
                <Ionicons name={"mail"} size={20} color={"black"}/>
                <TextInput className="ml-4" placeholder="Email"/>
            </View>
            <View className="flex-row p-3 shadow-xl bg-gray-200 mx-5 rounded-2xl items-center mt-10">
                <Fontisto name={"locked"} size={20} color={"black"}/>
                <TextInput className="ml-4" placeholder="Password"/>

            </View>
            <View className="flex-row p-3 shadow-xl bg-gray-200 mx-5 rounded-2xl items-center mt-10">
                <Entypo name={"mobile"} size={20} color={"black"}/>
                <TextInput className="ml-4" keyboardType="numeric" placeholder="Mobile"/>

            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} className="items-center">
                <Text className="font-bold p-3 bg-blue-400 rounded-xl w-[30%] mx-5 mt-10 text-center">Sign Up</Text>
            </TouchableOpacity>    

        </View>
  )
}

export default SignUp