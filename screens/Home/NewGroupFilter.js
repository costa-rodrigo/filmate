import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class NewGroupFilter extends React.Component {

  render() {
    return (
     <View>
         <Text>Filter streaming platform for the group</Text>
         <Button 
            title="Filter"
            onPress={() => {
                this.props.navigation.navigate('NewGroupName')
            }} />
     </View>
    );
  }
}

const styles = StyleSheet.create({

});