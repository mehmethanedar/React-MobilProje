import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
  
  state = {
    email: '',
    password: '',
    login: false,
  }
  
  componentDidMount = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyBeJdKl0e8CD3H1Bjd8I3Mni1imUnzl64w",
      authDomain: "react-mobil-proje.firebaseapp.com",
      databaseURL: "https://react-mobil-proje-default-rtdb.firebaseio.com",
      projectId: "react-mobil-proje",
      storageBucket: "react-mobil-proje.appspot.com",
      messagingSenderId: "322720429076",
      appId: "1:322720429076:web:eb80277b015ac1e0bc2301",
      measurementId: "G-28M6GRBC08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
  }

  girisyap = () => {   
    const {navigation} = this.props; 
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        navigation.goBack();
      }
      else {
        console.log('Giriş Yapılmadı');
      }
    })
  }

  render() {
    const {navigation} = this.props;
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
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: width - 40, padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Kayıt Ol</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.girisyap()}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: width - 40, padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
