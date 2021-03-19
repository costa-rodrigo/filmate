import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import MainButton from '../../components/MainButton';
import style from '../../Styles';

const ForgotPasswordScreen = props => {
    const [userEmail, setUserEmail] = useState('');

    return (
        <View style={style.screen}>
            <RegisterMessage title={RegisterData[2].title} description={RegisterData[2].description} />
                <TextInput 
                    style={style.input} 
                    onChangeText={(Email) => 
                        setUserEmail(Email)}
                    placeholder="Email"
                    placeholderTextColor='#8A8C90'
                    value={userEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <MainButton title="Next" onPress={() => {
                        props.navigation.navigate('ForgotPassword_Reset')
                }} />
            </View>
    )
}

export default ForgotPasswordScreen;