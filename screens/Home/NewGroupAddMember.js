import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddParticipant from './AddParticipant';

export default class NewGroupAddMember extends React.Component {

  render() {
    return (
     <View style={styles.screen}>
         <Text style={styles.title}>Add participant to group 'Group Name'</Text>
         <AddParticipant />
         <AddParticipant />
         <AddParticipant />
         <AddParticipant />
         <Button title="Add Participant" />
     </View>
    );
  }
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