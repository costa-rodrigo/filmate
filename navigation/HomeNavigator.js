import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupScreen from '../screens/Home/GroupScreens/GroupScreen';
import FriendScreen from '../screens/Home/FriendScreens/FriendScreen';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Groups" 
                component={GroupScreen}
                 />
            <Tab.Screen name="Friends" component={FriendScreen} />
        </Tab.Navigator> 
    )
}

export default HomeNavigator;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
})