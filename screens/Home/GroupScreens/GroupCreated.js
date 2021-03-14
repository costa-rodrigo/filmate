import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import NewGroupAddMember from './NewGroupAddMember';

const GroupCreated = props => {

     const { navigate } = props.navigation;


    return (
     <View style={styles.screen}>
         <Text style={styles.title}>Your group is created!</Text>
         <Text>You can edit your group from the home screen. Happy swiping!</Text>

            
         <Button  title="Back to home" onPress={() => {
                    props.navigation.navigate('GroupScreen')
                }} />
     </View>
    );
  }

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 50
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    }

});

export default GroupCreated;