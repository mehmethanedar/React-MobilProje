import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Product() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: "center",width:'100%' }}>
            <View style={{ flex: 2, width: '100%' }}>
                <View style={{ flex: 10 }}>
                    <Image
                        source={require('../images/urun1.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',

                        }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", width: '100%' }}>
                    <View style={{ flex: 1,marginLeft:20 }}><Text>ürün id</Text></View>

                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}><Text>62 ₺</Text></View>
                </View>
            </View>

            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>TAKIM ALT ÜST</Text>
                    <TouchableOpacity
                        style={styles.button}
                        >
                        <Text style={styles.buttonTitle}>Sepete Ekle</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a4e494',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 80,
        height: 48,
        width:'90%',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    }
})