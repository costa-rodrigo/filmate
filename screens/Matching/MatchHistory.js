import React from 'react';
import { View, Text } from 'react-native';
// import MainButton from '../../components/MainButton';
import style from '../../Styles';

const MatchHistory = props => {
     const { navigate } = props.navigation;

    return (
     <View style={style.screen}>
        
         <Text style={style.left_title}>movie title</Text>
         <Text style={style.caption}>imdb rating</Text>
         <Text style={style.paragraph_small}>mark as watched</Text>
        {/* <MainButton title="Back to home" onPress={() => {
                    props.navigation.navigate('GroupScreen')
                }} /> */}
     </View>
    );
  }

export default MatchHistory;