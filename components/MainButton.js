import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const MainButton = props => {
    return (
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white',
        width: 343,
        height: 52,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 14,
        fontFamily: 'Nunito-Bold'
    },
        bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50
      }
});

export default MainButton;