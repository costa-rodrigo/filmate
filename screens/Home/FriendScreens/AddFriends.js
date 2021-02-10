import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const AddFriends = props => {
    return (
        <View style={styles.screen}>
        
        <View style={styles.screen}>
            <Text style={styles.title}>Invite your friend to filmate and join you at *Group Name*</Text>
            <Text style={styles.description}>Email Address</Text>
            <Button 
                title="Invite Friend"
                onPress={() => {
                    props.navigation.replace('FriendsInvited')
                }}
            />
        </View>
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

export default AddFriends;