import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const PinkButton = props => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#f03349',
        width: 88,
        height: 32,
        borderRadius: 15,
       
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
});

export default PinkButton;