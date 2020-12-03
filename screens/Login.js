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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
