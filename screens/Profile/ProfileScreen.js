import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

const ProfileScreen = props => {
    // const [userPassword, setUserPassword] = useState('');
    // const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    return (

        <View>
            {/* <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} /> */}
            <View>
            <Image style={styles.image} source={require('../Onboarding/images/moodImage.jpg')} />
                <Text style={styles.text}>Kristen Ingelman</Text>
                <Text style={styles.text}>kristeningelman@hotmail.com</Text>
                <Button title="Edit profile" onPress={() => {
                    props.navigation.navigate('EditProfile')
                }} />
                 <Button title="Requests" onPress={() => {
                    props.navigation.navigate('RequestScreen')
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    // question: {
    //     fontSize: 20,
    //     marginTop: 7
    // },
    profile: {
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        textAlign: 'center'
    }

});

export default ProfileScreen;