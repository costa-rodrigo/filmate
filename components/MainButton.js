import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainButton = props => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 15
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        
    }
});

export default MainButton;