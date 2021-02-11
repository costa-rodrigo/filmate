import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from '../../../components/SearchBar';

const Tab = createMaterialTopTabNavigator();

const StartSession = props => {
    return (
        <View>
            <SearchBar search="Search Groups"/>
        

        <Text>Your groups will appear here!</Text>
        <Button title="New Group" />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default StartSession;