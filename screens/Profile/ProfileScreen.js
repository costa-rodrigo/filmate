import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const ProfileScreen = props => {
    // const [userPassword, setUserPassword] = useState('');
    // const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    return (

        <View>
            {/* <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} /> */}
            <View>
                <Text>Profile Screen!</Text>
                <Text>Kristen Ingelman</Text>
                <Text>kristeningelman@hotmail.com</Text>
                <Button title="Profile" onPress={() => {
                    props.navigation.navigate('EditProfile')
                }} />
                 <Button title="Requests" onPress={() => {
                    props.navigation.navigate('RequestScreen')
                }} />
                 <Button title="Tell Your Friends" onPress={() => {
                    props.navigation.navigate('TellFriendScreen')
                }} />

                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    question: {
        fontSize: 20,
        marginTop: 7
    }

});

export default ProfileScreen;