import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import ProfileImage from '../../svgs/icons/ProfileImage';

import style from '../../Styles';


const ProfileScreen = (props) => {
   
        return (

            <View style={style.screen}>
                {/* <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} /> */}
                <View>
                    <View>
                        <ProfileImage />
                    </View>
                   
                {/* <Image style={styles.image} source={require('../Onboarding/images/moodImage.jpg')} /> */}
                    <Text style={styles.text}>Kristen Ingelman</Text>
                    <Text style={styles.text}>kristeningelman@hotmail.com</Text>
                    <Button title="Edit profile" onPress={() => {
                        props.navigation.navigate('EditProfile')
                    }} />
                </View>
            </View>
 
        )
    }


const styles = StyleSheet.create({
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

