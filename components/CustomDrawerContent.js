import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ paddingLeft: 20, paddingTop: 30, height: 180, backgroundColor: '#fff' }}>
                <Image source={require('../images/logo.png')} style={{ height: 76, width: 200 }} />
                <Text style={styles.isim}>Mehmet HANEDAR</Text>
                <Text>mehmethanedar@hotmail.com</Text>
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