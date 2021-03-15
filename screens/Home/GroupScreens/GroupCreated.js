import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import NewGroupAddMember from './NewGroupAddMember';
import GroupCreatedImage from '../../../svgs/screens/GroupCreatedImage';
import MainButton from '../../../components/MainButton';

const GroupCreated = props => {

     const { navigate } = props.navigation;

    return (
     <View style={styles.screen}>
         <GroupCreatedImage />
         <Text style={styles.title}>Your group is created!</Text>
         <Text style={styles.desc}>You can edit your group from the home screen. Happy swiping!</Text>

        <MainButton title="Back to home" onPress={() => {
                    props.navigation.navigate('GroupScreen')
                }} />
         {/* <Button  title="Back to home" onPress={() => {
                    props.navigation.navigate('GroupScreen')
                }} /> */}
     </View>
    );
  }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121212'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        color: 'white'
    },
    desc: {
        color: 'white',
        textAlign: 'center'
    }

});

export default GroupCreated;