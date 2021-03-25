import React from 'react';
import { View, Text } from 'react-native';
import MatchImage from '../../../svgs/match/MatchImage';
import MainButton from '../../../components/MainButton';
import style from '../../../Styles';

const IfMatch = props => {
     const { navigate } = props.navigation;

    return (
     <View style={style.screen}>
         <MatchImage />
         <Text style={style.h1_heading}>Sit tight!</Text>
         <Text style={style.paragraph_medium}>Matching movies will appear in your group's match history after all participants finished swiping!</Text>
        {/* <MainButton title="Back to home" onPress={() => {
                    props.navigation.navigate('FriendScreen')
                }} /> */}
     </View>
    );
  }

export default IfMatch;