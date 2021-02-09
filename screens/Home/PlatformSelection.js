import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class PlatformSelection extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                    <Text style={styles.title}>Platform</Text>
            </View>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    card: {
        borderWidth: 1,
        width: '50%',
        height: 100,
        marginBottom: 20
        // marginHorizontal: 60
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    }

});