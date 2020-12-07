import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import Iletisim from './screens/Iletisim.js';
import Sepetim from './screens/Sepetim.js';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import CustomDrawerContent from './components/CustomDrawerContent.js';
import NavigationDrawerOrder from './components/NavigationDrawerOrder.js';
import NavigationDrawerStructure from './components/NavigationDrawerStructure.js';

const Drawer = createDrawerNavigator();


class firstScreenStack extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={Home}
          options={{
            title: 'Triliya', //Set Header Title

            headerLeft: () =>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerRight: () =>
              <NavigationDrawerOrder
                navigationProps={navigation}
              />,

            headerStyle: {
              backgroundColor: '#4bae32', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

      </Stack.Navigator>
    );

  }

}


function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#4bae32'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Ana Sayfa" component={firstScreenStack} />
      <Drawer.Screen name="Sepetim" component={Sepetim} />
      <Drawer.Screen name="Iletisim" component={Iletisim} />
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
