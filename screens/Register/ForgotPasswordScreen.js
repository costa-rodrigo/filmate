import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './data/RegisterData';


const ForgotPasswordScreen = props => {
    const [userEmail, setUserEmail] = useState('');

    return (
        <View>
            <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} />
            <View style={styles.screenBottom}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={(Email) => 
                        setEmail(Email)}
                    placeholder="Email"
                    value={userEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Button title="Next" onPress={() => {
                        props.navigation.navigate('ForgotPassword_Reset')
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

export default ForgotPasswordScreen;