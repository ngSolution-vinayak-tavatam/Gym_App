import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/HomeScreen";
import Menu from "./src/screen/MenuScreen";
import Index from "./src/screen/Index";
import SignIn from "./src/screen/SignIn";
import SignUp from "./src/screen/SignUp";
import StudentRegistration from "./src/screen/HomeScreen/StudentRegistration";
import StudentDetails from "./src/screen/HomeScreen/StudentDetails";
import FillFees from "./src/screen/HomeScreen/FillFees";
import StudentInformation from "./src/components/StudentInformation";

// import { StudentProvider } from "./src/screen/context/StudentContext";

import {StudentProvider} from "./src/screen/context/StudentContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StudentProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Index" component={Index} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          {/* <Stack.Screen
            name="StudentRegistration"
            component={StudentRegistration}
          /> */}
          {/* <Stack.Screen name="StudentDetails" component={StudentDetails} /> */}

          <Stack.Screen name="StudentRegistration">
            {(props) => (
              <StudentRegistration {...props} setStudentData={setStudentData} />
            )}
          </Stack.Screen>
          <Stack.Screen name="StudentDetails">
            {(props) => <StudentDetails {...props} studentData={studentData} />}
          </Stack.Screen>

          <Stack.Screen name="FillFees" component={FillFees} />
          <Stack.Screen
            name="StudentInformation"
            component={StudentInformation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StudentProvider>
  );
}
