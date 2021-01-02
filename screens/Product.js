import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Product() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 2, backgroundColor: 'red', width: '100%' }}>
                <View style={{ flex: 10, backgroundColor: 'red' }}><Text>asda</Text></View>
                <View style={{ flex: 1, flexDirection:'row',backgroundColor: 'blue' }}>
                    <View style={{ flex: 1,backgroundColor: 'blue' }}><Text>asda</Text></View>
                    <View style={{ flex: 1,backgroundColor: 'blue' }}><Text>asda</Text></View>                    
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'black', width: '100%' }}>
                <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}><Text>asda</Text></View>
                <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}><Text>asda</Text></View>
            </View>
        </View>
    )
}