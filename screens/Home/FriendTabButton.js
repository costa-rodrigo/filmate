import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const FriendTabButton = props => {
    return (
        <View style={styles.grid}>
             <TouchableOpacity style={styles.buttonActive}>
                <Text style={styles.buttonText}>Groups</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonInactive} onPress={props.onPress}>
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
        padding: 15,
        borderRadius: 10,
        // height: '50%'
        // width: 80
    },
    buttonInactive: {
        padding: 15,
        borderRadius: 15,
        // width: 80,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default FriendTabButton;