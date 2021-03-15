import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const FriendTabButton = props => {
    return (
        <View style={styles.grid}>
             <TouchableOpacity style={styles.buttonInactive} onPress={props.onPress}>
                <Text style={styles.buttonText}>Groups</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonActive}>
                <Text style={styles.buttonText}>Friends</Text>
             </TouchableOpacity>
        </View>
       
    )
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
    },
    buttonActive: {
        backgroundColor: '#242424',
        borderRadius: 7,
        height: 32,
        width: 72,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    buttonInactive: {
        height: 32,
        width: 72,
        borderRadius: 7,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
});

export default FriendTabButton;