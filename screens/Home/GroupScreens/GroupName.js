import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MainButton from '../../../components/MainButton';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import style from '../../../Styles';

const GroupName = props => {
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
                            let token = "Bearer " + store[0][1];
                            setToken(token)
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
        await axios.post('https://filmate.ca/groups/', {
            groupName: groupName
        }, {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((response) => {
            navigate('CreateGroup', {groupName: groupName})
        })
        .catch((error) => {
            console.log("catch error")
        })
       }

    return (
     <View style={style.screen}>
         <Text style={style.h3_heading}>What's the name of this group?</Text>
             <TextInput style={styles.input}
                    onChangeText={(GroupName) => 
                        setGroupName(GroupName)}
                    placeholder="roomates. friends, etc."
                    placeholderTextColor= "#737475"
                    value={groupName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardAppearance='dark'
             />
             <MainButton title="Next" onPress={handleSubmit}/>
     </View>
    );
  }

const styles = StyleSheet.create({
    input: {
        color: "white",
        fontFamily: 'Nunito-Regular',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 28,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 343,
    }
});

export default GroupName;