import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
// import AddParticipant from './AddParticipant';
import { CheckBox } from 'react-native-elements'

export default class NewGroupAddMember extends React.Component {
      state = {
        checked: false,
        checkedId: -1,
        checkboxes: [{id: 'kristen', title: 'Kristen'}, {id: 'mat', title: 'Mat'}, {id: 'rodrigo', title: 'Rodrigo'}]
      //  create an array of ids to map through to have multiple checkboxes
        
      }
      
      handleCheck = (checkedId) => {
        this.setState({checkedId})
        // this.setState({checked: !this.state.checked})
        
      }

        render() {
          const {checkboxes, checkedId } = this.state
          return (
            <View style={styles.screen}>
                <Text style={styles.title}>Add participant to group</Text>    
                {checkboxes.map(checkbox => (
                  <CheckBox
                  // title='John Doe'
                  key={checkbox.id}
                  title={checkbox.title}
                  max={2}
                  checked={checkbox.id == checkedId}
                  checkedIcon={<Image style={styles.checkmark} source={require('./checked.png')} />}
                  //  uncheckedIcon={<Image source={require('../unchecked.png')} />}
                  // checked={this.state.checked}
                  // onPress={() => this.setState({checked: !this.state.checked})}
                  onPress={() => this.handleCheck(checkbox.id)}
                  />
                

                ))}
                
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
    },
    checkmark: {
      width: 20,
      height: 20
    }

});