import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import axios from 'axios';
// import deviceStorage from './deviceStorage';

const SignupScreen = props => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
    // do we want a pop up when registration is succesful? refer to example
    // console.log(userName)
    // console.log(userEmail)
    // console.log(userPassword)

    // REVIEW REFS!!!!
    // const emailInputRef = createRef();
    // const passwordInputRef = createRef();


    const handleSubmit = () => {
        setErrorText('');
        // console.log(userName);
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
        // show loader
        setLoading(true);
        axios.post(`http://localhost:3000/register`, {
            name: userName,
            password: userPassword
        })
        .then((response) => {
            console.log(response)
            setLoading(false)
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
            // handle returned errors here
            setLoading(false)
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
        <View>
            <RegisterMessage 
                logoLink={RegisterData[0].logoLink} 
                title={RegisterData[1].title} 
            />

            <TextInput 
                style={styles.input} 
                onChangeText={(UserName) => 
                    setUserName(UserName)}
                placeholder="Name"
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
                keyboardType="email-address"
                value={userEmail}
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
                
            <Button title="Sign Up" onPress={() => {
                props.navigation.replace('Screen1');
            }}/>

            <View style={styles.screenBottom}>
                <Text style={styles.question}>Have an account?</Text>
                <Button title="Sign In" onPress={() => {
                    props.navigation.pop()
                }} />
            </View>
            <Button title="HANDLE_SUBMIT" onPress={handleSubmit}/>
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

export default SignupScreen;