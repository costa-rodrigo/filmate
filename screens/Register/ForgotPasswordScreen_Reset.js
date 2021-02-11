import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './RegisterData';


const ForgotPasswordScreen_Reset = props => {
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    return (

        <View>
            <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} />
            <View style={styles.screenBottom}>

            <TextInput 
                style={styles.input} 
                onChangeText={(Password) => 
                    setUserPassword(Password)}
                placeholder="Password"
                value={userPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                // returnKeyType="next"
            />

            <TextInput 
                style={styles.input} 
                onChangeText={(PasswordConfirm) => 
                    setUserPasswordConfirm(PasswordConfirm)}
                placeholder="Confirm Password"
                value={userPasswordConfirm}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                // returnKeyType="next"
            />
                <Button title="Reset" onPress={() => {
                    props.navigation.navigate('')
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

export default ForgotPasswordScreen_Reset;