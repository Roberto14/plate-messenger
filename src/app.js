import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Initial from './screens/Initial';
import Login from './screens/Login'
import Home from './screens/Home'

const AppStack = createStackNavigator({
    Home,
});

const AuthStack = createStackNavigator({
    Login,
});

export default createSwitchNavigator(
    {
        Initial,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Initial',
    }
);

