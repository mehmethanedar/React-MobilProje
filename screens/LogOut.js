import * as React from 'react';
import { render } from 'react-dom';
import { View, Text, TouchableOpacity } from 'react-native';
import { firebase } from '../firebase.js'

export default class LogOut extends React.Component {
    constructor({navigation}) {
        super(navigation)
        firebase.auth()
        .signOut()
        .then(() => navigation.navigate('Ana Sayfa'))
        this.state = {};
    }
    render(){
        return (
            <TouchableOpacity onPress={() => cikisYap()}>
                <View>
                    <Text>Çıkış Yapıldı.</Text>
                </View>
            </TouchableOpacity>
    
        )
    }
    

}

