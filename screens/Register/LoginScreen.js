import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import MainButton from '../../components/MainButton';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// import deviceStorage from './deviceStorage';


const LoginScreen = (props) => {
    // state variables : userUsername, userPassword, loading, errorText
    const [userUsername, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('')
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
 
    const handleSubmit = () => {
        setErrorText('');
        // console.log(userUsername)
        if (!userUsername) {
            alert('Please provide a username!');
            return;
        }
        if (!userPassword) {
            alert('Please provide a password!');
            return;
        }

        axios.post('http://localhost:3000/login', {
            name: userUsername,
            password: userPassword
        })
        .then((response) => {
            const { navigate } = props.navigation;
            const token = response.data.token;
            console.log(response)
            if(response.status === 200) {
                AsyncStorage.setItem("id_token", token);
                console.log("token:", token)
                // console.log(response.data.token)
                props.navigation.replace('Screen1')
            } else {
                 console.log('please check username and password')
                // need else? but not working... skips straight to catch
            }      
        })
        .catch((error) => {
            console.log("Please check your username and password.")
            Alert.alert('Incorrect username or password!')
            // console.error(error)
            
            // handle returned errors here
        })
    }
    return (
        <View>
             <RegisterMessage logoLink={RegisterData[0].logoLink} />
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

            <MainButton title="Sign In" onPress={handleSubmit} />
                
            <View style={styles.screenBottom}>
                <Text style={styles.question}>Don't have an account?</Text>
                <Button title="Sign Up" onPress={() => {
                    props.navigation.navigate('Signup')
                }} />
            </View>

            <Button title="Sign Up" onPress={() => {
                    props.navigation.navigate('Home')
                }} />
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