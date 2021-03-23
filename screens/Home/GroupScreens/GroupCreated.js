import React from 'react';
import { View, Text } from 'react-native';
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
                    props.navigation.navigate('FriendScreen')
                }} />
     </View>
    );
  }

export default GroupCreated;