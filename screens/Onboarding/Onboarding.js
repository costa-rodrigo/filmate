import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Onboarding = props => {
    return (
        <View style={styles.screen}>
            <Image style={styles.image} source={props.imageLink} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.body}>{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 100,
        marginBottom: 30
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    body: {
        fontSize: 18,
        paddingHorizontal: 15,
        marginBottom: 150
    }

});

export default Onboarding;