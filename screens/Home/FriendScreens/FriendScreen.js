import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../../../components/SearchBar';

const FriendScreen = props => {
    return (
        <View style={styles.screen}>
            <SearchBar style={styles.search} search="Search Friends"/>
        
        <View style={styles.newFriend}>
            <Text style={styles.title}>No Friends Yet</Text>
            <Text style={styles.description}>Start by inviting your friends and adding new groups</Text>
            <Button 
                title="Add Friends"
                onPress={() => {
                    props.navigation.navigate('AddFriends')
                }}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newFriend: {
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

export default FriendScreen;