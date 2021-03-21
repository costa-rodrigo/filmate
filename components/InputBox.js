import React from 'react';
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native';

const InputBox = props => {
    return (
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
            
       
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#242424',
        width: 343,
        height: 56,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        color: '#8a8c90',
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 20
    }
});

export default InputBox;