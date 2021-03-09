import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const GreyButton = props => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#242424',
        padding: 20,
        margin: 20,
        borderRadius: 15,
        marginHorizontal: '30%'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        
    }
});

export default GreyButton;