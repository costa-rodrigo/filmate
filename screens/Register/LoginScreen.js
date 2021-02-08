import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './RegisterData';


const LoginScreen = props => {
    return (
        <View>
            <RegisterMessage 
                logoLink={RegisterData[0].logoLink} 
                title={RegisterData[0].title} 
                userInput1={RegisterData[0].userInput1}
                userInput2={RegisterData[0].userInput2}
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