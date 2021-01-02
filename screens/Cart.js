import * as React from 'react';
import { View, Text } from 'react-native';
import Layout from '../components/Layout.js';

export default function Cart({ navigation, route }) {
    const { a } = route.params;
    console.log(a);
    return (
        <View >
            <Layout param={navigation} />
            <Text>Sepetim sayfası</Text>
        </View>
    );
}