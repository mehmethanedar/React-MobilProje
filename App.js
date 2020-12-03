import * as React from 'react';
import { StyleSheet,View, Text, Button,Image,Header,TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { BorderlessButton } from 'react-native-gesture-handler';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ana sayfamız burası</Text>
    </View>
  /*
  <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
  */
  );

}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Sepetim() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sepetim sayfası</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{paddingLeft:20,paddingTop:30,height:180,backgroundColor:'#fff'}}>
      <Image source={require('./images/logo.png')} style={{height:76,width:200}} />
      <Text style={styles.isim}>Mehmet HANEDAR</Text>
      <Text>mehmethanedar@hotmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('./images/drawerWhite.png')}
          style={{
            width: 35,
            height: 35,
            marginLeft: 8
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const NavigationDrawerOrder = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('./images/sepet.png')}
          style={{
            width: 45,
            height: 45,
            marginRight: 8
          }}
        />
      </TouchableOpacity>
    </View>
  );
}


function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={Feed}
          options={{
            title: 'Triliya', //Set Header Title
            
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerRight: ()=>
            <NavigationDrawerOrder
              navigationProps={navigation}
            />,
            
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
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

function MyDrawer() {
  return (
    <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63'
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={firstScreenStack} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Sepetim" component={Sepetim} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  isim:{
    fontWeight:'bold',
    marginTop:20,
  },
});
