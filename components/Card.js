import * as React from 'react';
import { useState } from 'react';
import { firebase } from '../firebase.js';
import { View, Text, Image, TouchableOpacity,FlatList } from 'react-native';

export default function Card(props) {
    const [productName, setProductName] = useState('')
    const [productPrice, setPrice] = useState('')
    const [productAge, setAge] = useState('')
    const [productImageUrl, setImageUrl] = useState('')

    let products = [];

    const usersRef = firebase.firestore().collection('products')
    usersRef
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);

            querySnapshot.forEach(documentSnapshot => {
                products.push(documentSnapshot.data())
            });
        });

    console.log(products)

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.1)", height: 250, margin: 20, width: '100%' }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>User ID: {item.id}</Text>
                        <Text>User Name: {item.productName}</Text>
                    </View>
                )}
            />
            
        </View>
    )
}