import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import MainButton from '../../../components/MainButton';
import AsyncStorage from '@react-native-community/async-storage';
// import NewGroupAddMember from './NewGroupAddMember';
// import CreateGroup from './CreateGroup';
import axios from 'axios';

const GroupName = props => {
     // state variables : groupName
     const [groupName, setGroupName] = useState('');
     const [errorText, setErrorText] = useState('');
     const [token, setToken] = useState('');

     const { navigate } = props.navigation;
 
    const handleSubmit = async => {
        setErrorText('');
        if (!groupName) {
            alert('Please provide a group name!');
            return;
        } else {
            return new Promise ( async (resolve, reject) => {
                try {
                    let storage = await AsyncStorage.getAllKeys((err, keys) => {
                        AsyncStorage.multiGet(keys, (error, stores) => {
                          stores.map((result, i, store) => {
                            //   console.log(store)
                            console.log("async", { [store[i][0]]: store[i][1] });
                            let token = "Bearer " + store[0][1];
                            setToken(token)
                            console.log("token from handlesubmit", token)
                            setGroupName(groupName)
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
        // console.log(token)
        await axios.post('http://192.168.0.20:3000/groups', {
            groupName: groupName
        }, {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((response) => {
            console.log(".then", groupName)
            // console.log(response.data)
            navigate('CreateGroup')
        })
        .catch((error) => {
            console.log("catch error")

        })
       }

    return (
     <View style={styles.screen}>
         <Text style={styles.title}>What's the name of this group?</Text>

             <TextInput style={styles.input}
                    onChangeText={(GroupName) => 
                        setGroupName(GroupName)}
                    placeholder="eg. Roomates"
                    placeholderTextColor= "#737475"
                    value={groupName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // returnKeyType="next"
             />
             <MainButton title="Next" onPress={handleSubmit}/>
            {/* <Button title="Next" onPress={handleSubmit} /> */}
     </View>
    );
  }

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#121212',
        height: '100%'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        color: '#D2D5D5'
    },
    input: {
        color: "#737475"
    }

});

export default GroupName;