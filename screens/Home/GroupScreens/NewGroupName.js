import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import MainButton from '../../../components/MainButton';
// import NewGroupAddMember from './NewGroupAddMember';
// import CreateGroup from './CreateGroup';

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
             navigate('CreateGroup')
         }
        }

    return (
     <View style={styles.screen}>
         <Text style={styles.title}>What's the name of this group?</Text>

             <TextInput style={styles.input}
                    onChangeText={(GroupName) => 
                        setGroupName(GroupName)}
                    placeholder="eg. Roomates"
                    placeholderTextColor= "#737475"
                    value={groupName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // returnKeyType="next"
             />
             <MainButton title="Next" onPress={handleSubmit}/>
            {/* <Button title="Next" onPress={handleSubmit} /> */}
     </View>
    );
  }

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#121212',
        height: '100%'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60,
        color: '#D2D5D5'
    },
    input: {
        color: "#737475"
    }

});

export default NewGroupName;