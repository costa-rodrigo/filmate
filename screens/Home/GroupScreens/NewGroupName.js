import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import NewGroupAddMember from './NewGroupAddMember';

const NewGroupName = props => {
     // state variables : groupName
     const [groupName, setGroupName] = useState('');
     const [errorText, setErrorText] = useState('')
     // console.log('groupname', groupName);

     const { navigate } = props.navigation;
 
     const handleSubmit = () => {
         setErrorText('');
         if (!groupName) {
             alert('Please provide a group name!');
             return;
         } else {
             navigate('NewGroupAddMember')
         }
        }

    return (
     <View style={styles.screen}>
         <Text style={styles.title}>What's the name of this group?</Text>

             <TextInput 
                    onChangeText={(GroupName) => 
                        setGroupName(GroupName)}
                    placeholder="eg. Roomates"
                    value={groupName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // returnKeyType="next"
             />
            <Button title="Next" onPress={handleSubmit} />
     </View>
    );
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

export default NewGroupName;