import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import MainButton from '../../components/MainButton';
import style from '../../Styles';

const ForgotPasswordScreen_Reset = props => {
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    return (

        <View style={style.screen}>
            <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} />
                <TextInput 
                    style={styles.input} 
                    onChangeText={(Password) => 
                        setUserPassword(Password)}
                    placeholder="Password"
                    placeholderTextColor="white"
                    value={userPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={(PasswordConfirm) => 
                        setUserPasswordConfirm(PasswordConfirm)}
                    placeholder="Confirm Password"
                    placeholderTextColor="white"
                    value={userPasswordConfirm}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <MainButton title="Reset" onPress={() => {
                        props.navigation.navigate('Login')
                    }}/>
                    {/* <Button title="Reset" onPress={() => {
                        props.navigation.navigate('Login')
                    }} /> */}
            </View>
    )
}

const styles = StyleSheet.create({
    question: {
        fontSize: 20,
        marginTop: 7
    },
    input: {
        backgroundColor: '#1E1E1E',
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        width: 343,
        height: 52,
    },

});

export default ForgotPasswordScreen_Reset;