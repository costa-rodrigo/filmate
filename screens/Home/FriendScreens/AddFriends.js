import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MainButton from '../../../components/MainButton';
import axios from 'axios';

const AddFriends = props => {
    const [friendEmail, setFriendEmail] = useState('');
    const [errorText, setErrorText] = useState('');
    const [token, setToken] = useState('');
    
    const { navigate } = props.navigation;

    const handleSubmit = async => {
        setErrorText('');
        if (!friendEmail) {
            alert('Please provide an email!');
            return;
        } else {
            return new Promise ( async (resolve, reject) => {
                try {
                    let storage = await AsyncStorage.getAllKeys((err, keys) => {
                        AsyncStorage.multiGet(keys, (error, stores) => {
                          stores.map((result, i, store) => {
                            //   console.log(store)
                            // console.log("async", { [store[i][0]]: store[i][1] });
                            let token = "Bearer " + store[0][1];
                            setToken(token)
                            console.log("token from handlesubmit", token)
                            setFriendEmail(friendEmail)
                            resolve(storage)
                            handleToken(token)
                            return token;
                          });
                        });
                      });

                } catch(error) {
                    reject(new Error('Error getting storage from AsyncStorage: ' + error.message))

                }
            });
        }
       }
 
       const handleToken  = async (token) => {
        console.log(token)
        await axios.post('http://192.168.0.20:3000/friends', {
            email: friendEmail
        }, {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((response) => {
            console.log(".then", friendEmail)
            console.log(response.data)
            navigate('FriendsInvited')
        })
        .catch((error) => {
            console.log("catch error")

        })
       }

    return (
        <View style={styles.screen}>
        <View style={styles.screen}>
            <Text style={styles.title}>Add a friend to the friend list.</Text>
            <Text>Email address</Text>
            <TextInput 
                    onChangeText={(FriendEmail) => 
                        setFriendEmail(FriendEmail)}
                    placeholder="friend@gmail.com"
                    value={friendEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
             />
            {/* <Button 
                title="Invite Friend"
                onPress={handleSubmit}
            /> */}
          
        </View>
        <MainButton title="Invite Friend" onPress={handleSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
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