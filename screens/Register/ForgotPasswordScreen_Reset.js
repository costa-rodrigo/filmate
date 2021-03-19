import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import MainButton from '../../components/MainButton';
import style from '../../Styles';

const ForgotPasswordScreen_Reset = props => {
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    
    return (
        <View style={style.screen}>
            <RegisterMessage title={RegisterData[2].title} description={RegisterData[2].description} />
                <TextInput 
                    style={style.input} 
                    onChangeText={(Password) => 
                        setUserPassword(Password)}
                    placeholder="Password"
                    placeholderTextColor='#8A8C90'
                    value={userPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput 
                    style={style.input} 
                    onChangeText={(PasswordConfirm) => 
                        setUserPasswordConfirm(PasswordConfirm)}
                    placeholder="Confirm Password"
                    placeholderTextColor='#8A8C90'
                    value={userPasswordConfirm}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <MainButton title="Reset" onPress={() => {
                        props.navigation.navigate('Login')
                    }}/>
            </View>
    )
}

export default ForgotPasswordScreen_Reset;