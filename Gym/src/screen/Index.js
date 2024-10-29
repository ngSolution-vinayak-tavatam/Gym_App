import { View, Text, Button } from 'react-native'
import React from 'react'

const Index = ({navigation}) => {
  return (
    <View className="flex-1 justify-center mx-5">
      <Button title='Welcome' onPress={()=>{navigation.navigate("SignIn")}}></Button>
      {/* <Button title='Signin' onPress={()=>{navigation.navigate("SignIn")}}></Button>
      <Button title='Signup' onPress={()=>{navigation.navigate("SignUp")}}></Button>
      <Button title='Home' onPress={()=>{navigation.navigate("SignUp")}}></Button> */}

      {/* <Button title='Demo Info' onPress={()=>{navigation.navigate("StudentInformation")}}></Button> */}


    </View>
  )
}

export default Index