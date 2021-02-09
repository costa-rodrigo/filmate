import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './RegisterData';

const SignupScreen = props => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    // const [isRegistrationSuccessful] = useState(false);
    // do we want a pop up when registration is succesful? refer to example
    console.log(userName)
    console.log(userEmail)
    console.log(userPassword)

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
        
        // I think we will do something similar to this to connect to the backend??
        // show loading
        setLoading(true);
        let sendData = {name: userName, email: userEmail, password: userPassword};

        var formBody = [];
        for (var key in sendData) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(sendData[key]);
        formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        body: formBody,
        headers: {
            //Header Defination
            'Content-Type':
            'application/x-www-form-urlencoded;charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            // If server response message same as Data Matched
            if (responseJson.status === 'success') {
            setIsRegistraionSuccess(true);
            console.log(
                'Registration Successful. Please Login to proceed'
            );
            } else {
            setErrortext(responseJson.msg);
            }
        })
        .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
        });
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