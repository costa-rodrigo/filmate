import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AddParticipant = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>John Doe</Text>
            
        </View>
       
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 20
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    }


});

export default AddParticipant;