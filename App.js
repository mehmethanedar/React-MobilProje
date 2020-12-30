import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import Contact from './screens/Contact.js';
import Cart from './screens/Cart.js';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import CustomDrawerContent from './components/CustomDrawerContent.js';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#4bae32',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Ana Sayfa" component={Home} />
      <Drawer.Screen name="Sepetim" component={Cart} />
      <Drawer.Screen name="Iletisim" component={Contact} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
