import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class NewGroupAddMember extends React.Component {

  render() {
    return (
     <View>
         <Text>Add participant to group 'Group Name'</Text>
         <Button title="Add Participant" />
     </View>
    );
  }
}

const styles = StyleSheet.create({

});