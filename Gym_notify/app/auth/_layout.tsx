import {  Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Login" options={{}}/>
      <Tabs.Screen name="Signup" options={{}} />
    </Tabs>
  );
}
