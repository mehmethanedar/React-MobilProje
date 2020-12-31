import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#4bae32',
          },
          headerTintColor: '#fff'}} name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}