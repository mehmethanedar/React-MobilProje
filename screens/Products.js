import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../components/Card';
import Layout from '../components/Layout';

export default function Products({ navigation }) {
    navigation.navigate('Urun')
    return (
        <View style={{ flex: 1 }}>
            <Layout param={navigation} />
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Card param={navigation} />
                    <Card />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Card />
                    <Card />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Card />
                    <Card />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Card />
                    <Card />
                </View>
            </ScrollView>
        </View>
    )
}