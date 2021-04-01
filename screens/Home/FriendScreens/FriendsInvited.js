import React from 'react';
import { View, Text } from 'react-native';
import FriendAddedImage from '../../../svgs/screens/FriendAddedImage';
import MainButton from '../../../components/MainButton';
import style from '../../../Styles';

class FriendsInvited extends React.Component {
    render() {
        return (
            <View style={style.screen}>
                <FriendAddedImage />
                <Text style={style.h1_heading}>Friends Invited!</Text>
                <Text style={style.paragraph_medium}>Waiting for approval, we will nofity you when they approve the invitation!</Text>
                <MainButton title="Back to Home"
                    onPress={() => {
                        this.props.navigation.navigate('GroupScreen')
                    }} />
            </View>
        )
    }
}

export default FriendsInvited;

