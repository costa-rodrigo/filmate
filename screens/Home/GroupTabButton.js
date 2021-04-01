import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import style from '../../Styles';

const FriendTabButton = props => {
    return (
        <View style={styles.grid}>
             <TouchableOpacity style={styles.buttonInactive} onPress={props.onPress}>
                <Text style={style.bold_small}>Groups</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonActive}>
                <Text style={style.bold_small}>Friends</Text>
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
    }
});

export default FriendTabButton;