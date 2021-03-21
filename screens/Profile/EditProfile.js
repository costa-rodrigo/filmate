import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import InputBox from '../../components/InputBox';
import MainButton from '../../components/MainButton';
import style from '../../Styles';

const EditProfile = props => {
    return (
        <View style={style.screen}>
            <View>
                <Text style={styles.text}>Change profile picture</Text>
            </View>
            <Text>Name and surname</Text>
            <InputBox title="Username"/>
            <Text>Email</Text>
            <InputBox title="Username"/>
            <Text>Current password</Text>
            <InputBox title="**************"/>
            <Text>New password</Text>
            <InputBox title="Type new password"/>
            <MainButton title="Make changes"/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white'
    }
});

export default EditProfile;