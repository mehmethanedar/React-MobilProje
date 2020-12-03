import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';



export default class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {navigation}=this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
        <Button
          title="Open drawer"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Button
          title="Toggle drawer"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
    );
  }
}
