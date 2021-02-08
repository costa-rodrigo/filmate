import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class NewGroupFilter extends React.Component {

  render() {
    return (
     <View style={styles.screen}>
         <Text style={styles.title}>Filter streaming platform for the group</Text>
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