import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import RegisterMessage from './RegisterMessage';
import { RegisterData } from './RegisterData';


const ForgotPasswordScreen_Reset = props => {
    return (
        <View>
            <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} />
            <View style={styles.screenBottom}>
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