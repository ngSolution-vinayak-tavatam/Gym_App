import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{title:"Home"}}/>
        <Drawer.Screen name="StudentRegistration" options={{}} />
        <Drawer.Screen name="StudentDetails" options={{}} />
        <Drawer.Screen name="FillFees" options={{}} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
