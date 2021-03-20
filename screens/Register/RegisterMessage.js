import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import style from '../../Styles';

const RegisterMessage = props => {
    return (
        <View style={styles.screen}>
            <View style={{marginTop: 80, marginHorizontal: 80}}>
                <Text style={style.h1_heading}>{props.title}</Text>
                <Text style={style.paragraph_medium}>{props.description}</Text>  
            </View>
                     
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white'
    },
    description: {
        color: 'white'
    }
});

export default RegisterMessage;