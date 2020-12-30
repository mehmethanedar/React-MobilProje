import * as React from 'react';
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
import SignUp from './screens/SignUp.js';
import CustomDrawerContent from './components/CustomDrawerContent.js';
import NavigationDrawerOrder from './components/NavigationDrawerOrder.js';
import NavigationDrawerStructure from './components/NavigationDrawerStructure.js';

const Drawer = createDrawerNavigator();

function StackTemplate(navigation, screen) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={screen}        
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
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}


class LoginScreenStack extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      StackTemplate(navigation, Login)      
    );
  }
}

class ContactScreenStack extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      StackTemplate(navigation, Contact)
    );
  }
}

class CartScreenStack extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      StackTemplate(navigation, Cart)
    );
  }
}

class HomeScreenStack extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      StackTemplate(navigation, Home)
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
      drawerContent={props => <CustomDrawerContent {...props}/> }>
      <Drawer.Screen name="Ana Sayfa" component={HomeScreenStack} />
      <Drawer.Screen name="Sepetim" component={CartScreenStack} />
      <Drawer.Screen name="Iletisim" component={ContactScreenStack} />
      <Drawer.Screen name="Login" component={LoginScreenStack} />
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
