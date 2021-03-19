import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MainButton from '../../components/MainButton';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import FilmateLogo from '../../svgs/logo/FilmateLogo';
import style from '../../Styles';

const LoginScreen = (props) => {
    // state variables : userUsername, userPassword, loading, errorText
    const [userUsername, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('');

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
        <View style={style.screen}>
            <FilmateLogo />
             <View style={styles.inputWrapper}>
                 <TextInput 
                    style={style.input} 
                    onChangeText={(Username) => 
                        setUsername(Username)}
                    placeholder="Username"
                    placeholderTextColor='#8A8C90'
                    value={userUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                <TextInput 
                    style={style.input}
                    placeholder="Password"
                    placeholderTextColor='#8A8C90'
                    value={userPassword}
                    onChangeText={(UserPassword) =>
                       setUserPassword(UserPassword)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    />
             </View>
            <TouchableOpacity onPress={() => {
                        props.navigation.navigate('ForgotPassword')
                    }}>
                        <Text style={{color: '#f03349', marginLeft: '10%'}}>Forgot Password?</Text>
            </TouchableOpacity>
                <MainButton title="home page" onPress={() => {
                        props.navigation.navigate('GroupScreen')
                    }}/>
                <MainButton title="Sign In" onPress={handleSubmit} />
                <View style={styles.flexContainer}>
                        <Text style={style.paragraph_small}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Signup')
                    }}>
                        <Text style={{color: '#f03349', textDecorationLine: 'underline'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
       flexDirection: 'row',
       justifyContent: 'center',
       marginBottom: 25
    },
    inputWrapper: {
        marginTop: 30
    }
});

export default LoginScreen;