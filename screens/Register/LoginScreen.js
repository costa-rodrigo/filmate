import React, { useState } from 'react';
import { 
    View, 
    Button, 
    Text, 
    StyleSheet,
    TextInput
} from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './RegisterData';


const LoginScreen = props => {
    // state variables : userUsername, userPassword, loading, errorText
    const [userUsername, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('')
    // console.log('username', userUsername);
    // console.log('password', userPassword);

    const handleSubmit = () => {
        setErrorText('');
        if (!userUsername) {
            alert('Oops, please provide a username!');
            return;
        }
        if (!userPassword) {
            alert('Oops, please provide a password!');
            return;
        }
        // I think we will use something similar to below to connect backend auth:


        // setLoading(true);
        // let sendData = {username: userUsername, password: userPassword};
        // let formBody = [];
        // for (let key in sendData) {
        //     let encodedKey = encodeURIComponent(key);
        //     let encodedValue = encodeURIComponent(sendData[key]);
        //     formBody.push(encodedKey + '=' + encodedValue);
        // }
        // formBody = formBody.join('&');
    
        // fetch('http://localhost:3000/api/user/login', {
        //   method: 'POST',
        //   body: formBody,
        //   headers: {
        //     //Header Defination
        //     'Content-Type':
        //     'application/x-www-form-urlencoded;charset=UTF-8',
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     //Hide Loader
        //     setLoading(false);
        //     console.log(responseJson);
        //     // If server response message same as Data Matched
        //     if (responseJson.status === 'success') {
        //       AsyncStorage.setItem('user_id', responseJson.data.email);
        //       console.log(responseJson.data.email);
        //       navigation.replace('DrawerNavigationRoutes');
        //     } else {
        //       setErrortext(responseJson.msg);
        //       console.log('Please check your username or password');
        //     }
        //   })
        //   .catch((error) => {
        //     //Hide Loader
        //     setLoading(false);
        //     console.error(error);
        //   });
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

            <Button title="Sign In" onPress={() => {
                props.navigation.replace('Screen1');
            }}/>

            <View style={styles.screenBottom}>
                <Text style={styles.question}>Don't have an account?</Text>
                <Button title="Sign Up" onPress={() => {
                    props.navigation.navigate('Signup')
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

export default LoginScreen;