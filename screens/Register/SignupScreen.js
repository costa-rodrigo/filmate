import React from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './RegisterData';

const SignupScreen = props => {
    return (
        <View>
            <RegisterMessage 
                logoLink={RegisterData[0].logoLink} 
                title={RegisterData[1].title} 
                userInput1={RegisterData[1].userInput1}
                userInput2={RegisterData[1].userInput2}
                userInput3={RegisterData[1].userInput3}
            
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
    },
    input: {

    }

});

export default SignupScreen;