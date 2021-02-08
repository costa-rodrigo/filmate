import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class NewGroupName extends React.Component {

  render() {
    return (
     <View style={styles.screen}>
         <Text style={styles.title}>What's the name of this group?</Text>
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