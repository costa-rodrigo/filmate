import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from '../../components/SearchBar';

const Tab = createMaterialTopTabNavigator();

const GroupScreen = props => {
    return (
        <View style={styles.screen}>
            <SearchBar style={styles.search} search="Search Groups"/>
        
        <View style={styles.newGroup}>
            <Text style={styles.title}>Your groups will appear here!</Text>
            <Text style={styles.description}>Start by inviting your friends and adding new groups</Text>
            <Button title="New Group" />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newGroup: {
        marginVertical: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        paddingVertical: 100,
        marginHorizontal: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    description: {
        textAlign: 'center',
        marginBottom: 30
    }

});

export default GroupScreen;