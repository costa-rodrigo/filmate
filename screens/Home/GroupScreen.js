import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from '../../components/SearchBar';

const Tab = createMaterialTopTabNavigator();

const GroupScreen = props => {
    return (
        <SearchBar search="Search Groups"/>
    )
}

const styles = StyleSheet.create({

});

export default GroupScreen;