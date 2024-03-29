import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, Modal, TouchableOpacity } from 'react-native';
import MainButton from '../../components/MainButton';
import axios from 'axios';
import FilmateLogo from '../../svgs/logo/FilmateLogo';
import PinkButton from '../../components/PinkButton';
import style from '../../Styles';
import modal from '../../Modal';

const SignupScreen = props => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        setErrorText('');
        if (!userName) {
            alert('Please provide a name');
            return;
        }
        if (!userEmail) {
            alert('Please provide an email');
            return;
        }
        if (!userPassword) {
            alert('Please provide a password');
            return;
        }
        
        axios.post('https://filmate.ca/register', {
            name: userName,
            email: userEmail,
            password: userPassword
        })
        .then((response) => {
            setModalVisible(true);
            console.log("Registration successful, login now!")
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <View style={style.screen}>
             <StatusBar
                barStyle="light-content"
                backgroundColor="#4F6D7A"
                />
            <View style={styles.logo}>
                <FilmateLogo />
            </View>
            <View style={styles.inputWrapper}>
                <TextInput 
                    style={style.input} 
                    onChangeText={(UserName) => 
                        setUserName(UserName)}
                    placeholder="Name"
                    placeholderTextColor='#8A8C90'
                    value={userName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    keyboardAppearance='dark'
                />
                <TextInput 
                    style={style.input} 
                    onChangeText={(UserEmail) => 
                        setUserEmail(UserEmail)}
                    placeholder="Email"
                    placeholderTextColor='#8A8C90'
                    keyboardType="email-address"
                    value={userEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    keyboardAppearance='dark'
                />    
                <TextInput 
                    style={style.input}
                    placeholder="Password"
                    placeholderTextColor='#8A8C90'
                    value={userPassword}
                    onChangeText={(UserPassword) =>
                        setUserPassword(UserPassword)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    keyboardAppearance='dark'
                />

            </View>
            <View style={modal.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={modal.centeredView}>
                <View style={modal.modalView}>
                  <Text style={style.title}>Account created!</Text>
                  <Text style={style.bold_small}>You can now sign in using your credentials.</Text>
                  <PinkButton
                    style={[modal.button, modal.buttonClose]}
                    title="Ok"
                    onPress={() =>
                    props.navigation.navigate('Login')}
                  />
                </View>
              </View>
            </Modal>
          </View>
            
            <MainButton title="Sign Up" onPress={handleSubmit} />
                <View style={styles.flexContainer}>
                    <Text style={style.paragraph_small}>Have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.pop()
                    }}>
                        <Text style={{color: '#f03349', textDecorationLine: 'underline'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
       flexDirection: 'row',
       justifyContent: 'center',
       marginBottom: 25
    },
    inputWrapper: {
        marginTop: 30
    }
});

export default SignupScreen;