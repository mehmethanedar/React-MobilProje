import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createLeftTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Login from './screens/Login';

const getTabBarIcon = icon => ({ tintColor }) => (
    <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const HomeScreens = createStackNavigator(
    {
        Home,
        Login,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            tabBarIcon: getTabBarIcon('list'),
        },
    },
);

const TabNavigator = createLeftTabNavigator(
    {
        Home: HomeScreens,
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'left',
        tabBarOptions: {
            style: {
                backgroundColor: colors.greyLight,
            },
            showLabel: false,
            showIcon: true,
            activeTintColor: colors.blue,
            inactiveTintColor: colors.greyDark,
        },
    }
)

export default createAppContainer(TabNavigator);