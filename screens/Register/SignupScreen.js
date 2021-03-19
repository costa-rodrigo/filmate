import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, StatusBar, Modal, Pressable } from 'react-native';
import MainButton from '../../components/MainButton';
import axios from 'axios';
import FilmateLogo from '../../svgs/logo/FilmateLogo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PinkButton from '../../components/PinkButton';
import style from '../../Styles';

const SignupScreen = props => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    // const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
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
        
        axios.post('http://192.168.0.20:3000/register', {
        // axios.post('http://localhost:3000/register', {
            name: userName,
            email: userEmail,
            password: userPassword
        })
        .then((response) => {
            // console.log(response)
            // NEED to add an if statement here - eg. if message = success - let us know registration was successful. 
            // within IF set registration to success
            // setIsRegistrationSuccessful(true);
            setModalVisible(true);
            console.log("Registration successful, login now!")
            // need to do something similar to below
            // if (response.status === 'success') {
      //       setIsRegistraionSuccess(true);
      //         console.log(
      //           'Registration Successful. Please Login to proceed'
      //         );
      //       } else {
      //         setErrortext(response.msg);
      //       }
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
                    style={styles.input} 
                    onChangeText={(UserName) => 
                        setUserName(UserName)}
                    placeholder="Name"
                    placeholderTextColor="white"
                    value={userName}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={(UserEmail) => 
                        setUserEmail(UserEmail)}
                    placeholder="Email"
                    placeholderTextColor="white"
                    keyboardType="email-address"
                    value={userEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                />    
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    value={userPassword}
                    onChangeText={(UserPassword) =>
                        setUserPassword(UserPassword)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                />

            </View>
            <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTextHeading}>Account created!</Text>
                  <Text style={styles.modalText}>You can now sign in using your credentials.</Text>
                  <PinkButton
                    style={[styles.button, styles.buttonClose]}
                    title="Ok"
                    onPress={() =>
                    props.navigation.navigate('Login')}
                  />
                    {/* <Text style={styles.textStyle}>Ok</Text> */}
                  {/* </Pressable> */}
                </View>
              </View>
            </Modal>
          </View>
            
            <MainButton title="Sign Up" onPress={handleSubmit} />
                <View style={styles.flexContainer}>
                    <Text style={styles.question}>Have an account?</Text>
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
    question: {
        // fontSize: 20,
        // marginTop: 7,
        color: 'white',
        marginRight: 5
    },
    input: {
        backgroundColor: '#1E1E1E',
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        width: 343,
        height: 52,
    },
    inputWrapper: {
        marginTop: 30
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: 311,
        height: 216,
        margin: 20,
        backgroundColor: "#1E1E1E",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 88,
        marginTop: 30
      },
      buttonClose: {
        backgroundColor: "#f03349",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalTextHeading: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white'
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white',
      }
});

export default SignupScreen;