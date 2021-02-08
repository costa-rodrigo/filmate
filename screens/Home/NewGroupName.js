import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class NewGroupName extends React.Component {

  render() {
    return (
     <View>
         <Text>What's the name of this group?</Text>
         <Button 
            title="Next"
            onPress={() => {
                this.props.navigation.navigate('NewGroupAddMember')
            }} />
     </View>
    );
  }
}

const styles = StyleSheet.create({

});