import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Contact from '../screens/Contact.js';
import Cart from '../screens/Cart.js';

const Tab = createBottomTabNavigator();

const CartTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Yaz"
            tabBarOptions={{
                activeTintColor: '#4bae32',
                labelStyle: {
                    fontSize: 20,
                  }
            }}
        >
            <Tab.Screen name="Sepetim" component={Cart} />
            <Tab.Screen name="İletişim" component={Contact} />
        </Tab.Navigator>
    );
};

export default CartTabNavigator;