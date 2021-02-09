import React from 'react';
import { 
    View, 
    Text, StyleSheet, Image, TextInput } from 'react-native';

const RegisterMessage = props => {
    const [usernameValue, onChangeUsername] = React.useState(props.userInput1);
    const [passwordValue, onChangePassword] = React.useState(props.userInput2);

    

    return (
        <View style={styles.screen}>
            <Image style={styles.logo} source={props.logoLink} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.inputFields}>
                {/* <TextInput 
                    style={styles.input} 
                    onChangeText={text => onChangeUsername(text)}
                    placeholder={usernameValue}
                    // value={usernameValue}
                    name={usernameValue} 
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    />
                    
                <TextInput 
                    style={styles.input}
                    onChangeText={text => onChangePassword(text)}
                    placeholder={passwordValue} 
                    value={passwordValue}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    /> */}
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
        justifyContent: 'space-between',
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'left',
        width: 400,
        color: 'gray',
        marginBottom: 20
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