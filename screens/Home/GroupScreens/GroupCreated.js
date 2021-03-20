import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import NewGroupAddMember from './NewGroupAddMember';
import GroupCreatedImage from '../../../svgs/screens/GroupCreatedImage';
import MainButton from '../../../components/MainButton';
import style from '../../../Styles';
const GroupCreated = props => {

     const { navigate } = props.navigation;

    return (
     <View style={style.screen}>
         <GroupCreatedImage />
         <Text style={style.h1_heading}>Your group is created!</Text>
         <Text style={style.paragraph_medium}>You can edit your group from the home screen. Happy swiping!</Text>

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
    // title: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     marginBottom: 60,
    //     color: 'white'
    // },
    // desc: {
    //     color: 'white',
    //     textAlign: 'center'
    // }

});

export default GroupCreated;