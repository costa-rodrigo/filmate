import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// import deviceStorage from './deviceStorage';


const LoginScreen = (props) => {

    

    // state variables : userUsername, userPassword, loading, errorText
    const [userUsername, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('')
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
 
    const handleSubmit = () => {
        setErrorText('');
        // console.log(userUsername)
        // console.log(userPassword)
        if (!userUsername) {
            alert('Please provide a username!');
            return;
        }
        if (!userPassword) {
            alert('Please provide a password!');
            return;
        }
        // setLoading(true)
        axios.post(`http://localhost:3000/login`, {
            name: userUsername,
            password: userPassword
        })
        .then((response) => {
            const { navigate } = props.navigation;
            const token = response.data.token;
            // setLoading(false)
            // console.log(response)
            console.log("token:", token)
            if(response.status === 200) {
                AsyncStorage.setItem("id_token", token);
                // console.log(response.data.token)
                // setIsLoginSuccessful(true);
                props.navigation.replace('Screen1')
            } else {
                // else statements wont work??
            }
                   
        })
        .catch((error) => {
            // setLoading(false);
            console.log("Please check your username and password! :) ")
            Alert.alert('Incorrect username or password!')
            // console.error(error)
            
            // handle returned errors here
        })
    }
    return (
        <View>
             <RegisterMessage 
                logoLink={RegisterData[0].logoLink} 
                title={RegisterData[0].title} 
            />
                <TextInput 
                    style={styles.input} 
                    onChangeText={(Username) => 
                        setUsername(Username)}
                    placeholder="Username"
                    value={userUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    />
                    
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    value={userPassword}
                    onChangeText={(UserPassword) =>
                       setUserPassword(UserPassword)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    />
           
            <Button title="Forgot Password?" onPress={() => {
                    props.navigation.navigate('ForgotPassword')
                }}/>
             <Button title="Sign In" onPress={handleSubmit}/>

            {/* <Button title="Sign In" onPress={() => {
                props.navigation.replace('Screen1');
            }}/> */}

            <View style={styles.screenBottom}>
                <Text style={styles.question}>Don't have an account?</Text>
                <Button title="Sign Up" onPress={() => {
                    props.navigation.navigate('Signup')
                }} />
              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenBottom: {
       flexDirection: 'row',
       justifyContent: 'space-around'
    },
    question: {
        fontSize: 20,
        marginTop: 7
    }

});

export default LoginScreen;