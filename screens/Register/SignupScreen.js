import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import MainButton from '../../components/MainButton';
import axios from 'axios';
import FilmateLogo from '../../svgs/logo/FilmateLogo';

const SignupScreen = props => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

    const handleSubmit = () => {
        setErrorText('');
        if (!userName) {
            alert('Please provide a name');
            return;
        }
        if (!userEmail) {
            alert('Please provide an email');
            return;
        }
        if (!userPassword) {
            alert('Please provide a password');
            return;
        }
        
        axios.post('http://192.168.0.20:3000/register', {
        // axios.post('http://localhost:3000/register', {
            name: userName,
            email: userEmail,
            password: userPassword
        })
        .then((response) => {
            // console.log(response)
            // NEED to add an if statement here - eg. if message = success - let us know registration was successful. 
            // within IF set registration to success
            setIsRegistrationSuccessful(true);
            console.log("Registration successful, login now!")
            // need to do something similar to below
            // if (response.status === 'success') {
      //       setIsRegistraionSuccess(true);
      //         console.log(
      //           'Registration Successful. Please Login to proceed'
      //         );
      //       } else {
      //         setErrortext(response.msg);
      //       }
        })
        .catch((error) => {
            console.error(error)
        })
    }
    if (isRegistrationSuccessful) {
        return(
            <View>
                <Text>Registration Successful!</Text>
                <Button title="login" onPress={() => props.navigation.navigate('Login')}></Button>
            </View>
        )
    }
    return (
        <View style={styles.screen}>
             <StatusBar
                barStyle="light-content"
                backgroundColor="#4F6D7A"
                />
            <View style={styles.logo}>
                <FilmateLogo />
            </View>
            <View style={styles.inputWrapper}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={(UserName) => 
                        setUserName(UserName)}
                    placeholder="Name"
                    placeholderTextColor="white"
                    value={userName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={(UserEmail) => 
                        setUserEmail(UserEmail)}
                    placeholder="Email"
                    placeholderTextColor="white"
                    keyboardType="email-address"
                    value={userEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
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
            

            {/* <Button title="Sign Up" onPress={handleSubmit}/> */}
           

            <View style={styles.screenBottom}>
                <MainButton title="Sign Up" onPress={handleSubmit} />
                <View style={styles.flexContainer}>
                    <Text style={styles.question}>Have an account?</Text>
                    <Button title="Sign In" onPress={() => {
                        props.navigation.pop()
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

export default SignupScreen;