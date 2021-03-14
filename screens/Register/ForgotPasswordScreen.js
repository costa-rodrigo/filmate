import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';
import MainButton from '../../components/MainButton';


const ForgotPasswordScreen = props => {
    const [userEmail, setUserEmail] = useState('');

    return (
        <View style={styles.screen}>
            <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} />
                <TextInput 
                    style={styles.input} 
                    onChangeText={(Email) => 
                        setUserEmail(Email)}
                    placeholder="Email"
                    placeholderTextColor="white"
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121212'
    },
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

export default ForgotPasswordScreen;