import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import MainButton from '../../components/MainButton';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import FilmateLogo from '../../svgs/logo/FilmateLogo';

const LoginScreen = (props) => {
    // state variables : userUsername, userPassword, loading, errorText
    const [userUsername, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('')
    // const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
 
    const handleSubmit = () => {
        setErrorText('');
        if (!userUsername) {
            alert('Please provide a username!');
            return;
        }
        if (!userPassword) {
            alert('Please provide a password!');
            return;
        }

        axios.post('http://192.168.0.20:3000/login', {
        // axios.post('http://localhost:3000/login', {
            name: userUsername,
            password: userPassword,
        })
        .then((response) => {
            const token = response.data.token;
            if(response.status === 200) {
                // AsyncStorage.removeItem("username");
                AsyncStorage.setItem("id_token", token);
                AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                          console.log(store)
                        // console.log("async", { [store[i][0]]: store[i][1] });
                        return true;
                      });
                    });
                  });
                console.log("token:", token)
                axios.get('http://192.168.0.20:3000/login'), {
                    name: userUsername,
                    password: userPassword
                }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
               console.log(response)

                props.navigation.replace('Onboarding', {userUsername, userUsername})

            } else if (response.status === undefined) {
                console.log("undefined")
            }    
        })
        // .catch((error) => {
        //     // if (response.status == undefined) {
        //     //     Alert.alert('Incorrect username or password!')
        //     // }
        //     // else {
        //     //     console.log('help')
        //     // }
        //     console.error(error)
        //     // console.log("Please check your username and password -  CATCH.")
          
        //     // console.log(response.status)
        //     // console.log(error)
        //     // handle returned errors here
        // })
    }

    return (
        <View style={styles.screen}>
            <FilmateLogo />
             <View style={styles.inputWrapper}>
             <TextInput 
                    style={styles.input} 
                    onChangeText={(Username) => 
                        setUsername(Username)}
                    placeholder="Username"
                    placeholderTextColor="white"
                    value={userUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // returnKeyType="next"
                    />
                    
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    value={userPassword}
                    onChangeText={(UserPassword) =>
                       setUserPassword(UserPassword)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    />
             </View>
               
           
            <Button title="Forgot Password?" onPress={() => {
                    props.navigation.navigate('ForgotPassword')
                }}/>

           <View style={styles.screenBottom}>
            <MainButton title="Sign In" onPress={handleSubmit} />
                <View style={styles.flexContainer}>
                    <Text style={styles.question}>Don't have an account?</Text>
                    <Button title="Sign Up" onPress={() => {
                        props.navigation.navigate('Signup')
                    }} />
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#121212',
        height: '100%'
    },
    screenBottom: {
        height: '30%',
        marginTop: '40%'
    },
    flexContainer: {
       flexDirection: 'row',
       justifyContent: 'space-around'
    },
    question: {
        fontSize: 20,
        marginTop: 7,
        color: 'white'
    },
    input: {
        backgroundColor: '#1E1E1E',
        marginBottom: 10,
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        color: 'white'
    },
    inputWrapper: {
        marginTop: 30
    }
 
});

export default LoginScreen;