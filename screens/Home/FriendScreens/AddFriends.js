import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';


const AddFriends = props => {
    const [friendEmail, setFriendEmail] = useState('');
    const [errorText, setErrorText] = useState('')


    const { navigate } = props.navigation;
 
    const handleSubmit = () => {
        setErrorText('');
        if (!friendEmail) {
            alert('Please provide an email!');
            return;
        } else {
            navigate('FriendsInvited')
        }
       }
    return (
        <View style={styles.screen}>
        
        <View style={styles.screen}>
            <Text style={styles.title}>Invite your friend to filmate and join you at *Group Name*</Text>
           
            <TextInput 
                    onChangeText={(FriendEmail) => 
                        setFriendEmail(FriendEmail)}
                    placeholder="Email Address"
                    value={friendEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // returnKeyType="next"
             />
            <Button 
                title="Invite Friend"
                onPress={handleSubmit}
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