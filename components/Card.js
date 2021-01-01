import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Card(props) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.1)", height: 250, margin: 20, width: '100%' }}>
            <View style={{ flex: 5, width: '100%' }}>
            <TouchableOpacity onPress={() => props.param.navigate('Ürünler')} style={{width:'100%'}}><Text>asdasd</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => props.param.navigate('Urun')} style={{width:'100%'}}>
                    <Image
                        source={require('../images/urun1.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flex: 4, alignItems: "center", width: '100%' }}>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>76 ₺</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>ERKEK 4'LÜ TAKIM </Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: '100%' }}>

                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 15 }}>4-8 YAŞ</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require('../images/sepetAdd.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    margin: 8
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}