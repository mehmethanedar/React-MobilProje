import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

const { width, height } = Dimensions.get('window');

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    login: false,
  }

  
  kayitol = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="E-mail Adresi"
          style={{ marginTop: 10, width: width - 40, padding: 10, fontSize: 12, backgroundColor: 'white', borderRadius: 4 }}
          underlineColorAndroid='transparent'
          onChangeText={email => this.setState({ email: email })}
          value={this.state.email}
          keyboardType='email-address'
          placeholderTextColor='gray'
        />

        <TextInput
          placeholder="Şifre"
          style={{ marginTop: 10, width: width - 40, padding: 10, fontSize: 12, backgroundColor: 'white', borderRadius: 4 }}
          underlineColorAndroid='transparent'
          onChangeText={password => this.setState({ password: password })}
          value={this.state.password}
          secureTextEntry
          placeholderTextColor='gray'
        />
        <TouchableOpacity onPress={() => this.kayitol()}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: width - 40, padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Kayıt Ol</Text>
          </View>
        </TouchableOpacity>      
      </View>
    );
  }
}
