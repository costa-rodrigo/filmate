import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RegisterMessage = props => {
    return (
        <View style={styles.screen}>
            <Image style={styles.logo} source={props.logoLink} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    }
});

export default RegisterMessage;