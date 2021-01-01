import * as React from 'react';
import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../screens/Contact.js';
import Cart from '../screens/Cart.js';
import Home from '../screens/Home.js';
import LogOut from '../screens/LogOut.js'
import Product from '../screens/Product.js';
import Products from '../screens/Products.js';
import {MyStack, ProductStack} from './StackNavigator.js';
import CustomDrawerContent from '../components/CustomDrawerContent.js';
import { firebase } from '../firebase.js'


const Drawer = createDrawerNavigator();


export default function MyDrawer() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: '#4bae32',
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Ana Sayfa" component={Home} />
            <Drawer.Screen name="Sepetim" component={Cart} />
            <Drawer.Screen name="İletişim" component={Contact} />
            {false ? (<Drawer.Screen name="Ürün" component={Product} />):(<Drawer.Screen name="Ürünler" component={Products} />)}
            
            {!user ? (
                <Drawer.Screen name="Giriş Yap" component={MyStack} />
            ) : (
                    <Drawer.Screen name="Çıkış Yap" component={LogOut} />
                )}
        </Drawer.Navigator>
    );
}