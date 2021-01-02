import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import Layout from '../components/Layout.js';

export default function Cart({ navigation, route }) {
    const [data, setData] = useState([])
    const { itemID, name, price, age } = route.params;
    data.push(route.params)
    console.log(data)
    alert(name + ' sepetinize eklendi.')
    return (
        <View>
            <Layout param={navigation} />
            <Text>Sepetim sayfası - {name}</Text>
        </View>
    );
}