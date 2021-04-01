import React from 'react';
import { View, Text } from 'react-native';
import NoMatchImage from '../../svgs/match/NoMatchImage';
import MainButton from '../../components/MainButton';
import { useNavigation } from '@react-navigation/native';
import style from '../../Styles';

const IfNoMatch = props => {
  const navigation = useNavigation();

    return (
     <View style={style.screen}>
         <NoMatchImage />
         <Text style={style.h1_heading}>No match!</Text>
         <Text style={style.paragraph_medium}>Don't feel bad for your diverse taste. Give another round a try!</Text>
        <MainButton title="Swipe again" onPress={() => {
                    navigation.navigate('GroupScreen')
                }} />
     </View>
    );
  }

export default IfNoMatch;