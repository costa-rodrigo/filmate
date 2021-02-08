import React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';

const RegisterMessage = props => {


    return (
        <View style={styles.screen}>
            <Image style={styles.logo} source={props.logoLink} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.inputFields}>
                <TextInput style={styles.input} value={props.userInput1} />
                <TextInput style={styles.input} value={props.userInput2} />
                <TextInput style={styles.input} value={props.userInput3} />
            </View>
            
            {/* <Button style={styles.forgotButton} title={props.forgotButton} onPress={() => {
                    props.navigation.navigate('ForgotPassword')
                }}/> */}

            {/* <View style={styles.mainButton}><Button title={props.mainButton} /></View> */}
            {/* <Button title={props.mainButton} onPress={() => {
                props.navigation.navigate('OnboardingScreen1');
            }}/> */}
            
            {/* <View style={styles.screenBottom}>
                <Text style={styles.question}>Don't have an account?</Text>
                <Button title="Sign Up" onPress={() => {
                    props.navigation.navigate('Signup')
                }} />
            </View> */}
           
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    },
    inputFields: {
        marginTop: 20,
        // marginBottom: 400

    },
    input: {
        fontSize: 20,
        textAlign: 'left',
        borderColor: 'black',
        borderWidth: 1,
        width: 300
    },
    forgotButton: {
        textAlign: 'right',
        marginBottom: 100,
        fontSize: 50
    },
    mainButton: {
        fontSize: 20
    },
    bodyBottom: {
        fontSize: 18,
        paddingHorizontal: 15,
        // marginBottom: 350
    },
    screenBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 350
     },
     question: {
        fontSize: 20,
        marginTop: 7
    }

});

export default RegisterMessage;