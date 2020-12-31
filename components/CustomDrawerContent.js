import * as React from 'react';
import {useState} from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native';
import { firebase } from '../firebase.js'

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


export default function CustomDrawerContent(props) {
    let user;
    const girisyap = () => {
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(firebase.auth().currentUser.uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.")
              return;
            }
            user = firestoreDocument.data()
            console.log(user.fullName)
          })
          .catch(error => {
            alert(error)
          });
    }

    return (
        
        <DrawerContentScrollView {...props}>
            <View style={{ paddingLeft: 20, paddingTop: 30, height: 180, backgroundColor: '#fff' }}>
                <Image source={require('../images/logo.png')} style={{ height: 76, width: 200 }} />
                <Text style={styles.isim}>Mehmet HANEDAR</Text>
                <TouchableOpacity onPress={() => girisyap()}><Text>asdasd</Text></TouchableOpacity>

            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: 'black', opacity: .2 }} />

            <DrawerItemList {...props} />
            <View style={{ height: 1, width: '100%', backgroundColor: 'black', opacity: .2 }} />
            <DrawerItem
                label="Visit Us"
                onPress={() => props.navigation.navigate('Sepetim')}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    isim: {
        fontWeight: 'bold',
        marginTop: 20,
    },
});