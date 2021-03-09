import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import axios from 'axios';

const FriendsInvited= props => {


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Friends Invited!</Text>
            <Text style={styles.description}>Waiting for approval, we will nofity you when they approve the invitation!</Text>
            <Button 
                title="Back to Home"
                onPress={() => {
                    props.navigation.navigate('Home')
                }}
            />
             <Button 
                title="Invite More Friends"
                onPress={() => {
                    props.navigation.navigate('AddFriends')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 50
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    },
    description: {
        textAlign: 'center',
        marginBottom: 40
    }

});

export default FriendsInvited;