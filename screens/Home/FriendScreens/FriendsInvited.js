import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import style from '../../../Styles';
class FriendsInvited extends React.Component {
    render() {
        return (
            <View style={style.screen}>
                <Text style={styles.title}>Friends Invited!</Text>
                <Text style={styles.description}>Waiting for approval, we will nofity you when they approve the invitation!</Text>
                <Button 
                    title="Back to Home"
                    onPress={() => {
                        this.props.navigation.navigate('GroupScreen')
                    }}
                />
                 <Button 
                    title="Invite More Friends"
                    onPress={() => {
                        this.props.navigation.navigate('AddFriends')
                    }}
                />
            </View>
        )
    }
}

export default FriendsInvited;

const styles = StyleSheet.create({
    // screen: {
    //     paddingHorizontal: 20,
    //     paddingTop: 50
    // },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    },
    description: {
        textAlign: 'center',
        marginBottom: 40
    }

});
