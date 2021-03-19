import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import ProfileImage from '../../svgs/icons/ProfileImage';
// import { AppLoading } from 'expo-app-loading';
import style from '../../Styles';

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from '@expo-google-fonts/nunito-sans';

const ProfileScreen = (props) => {
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular,
        NunitoSans_600SemiBold,
        NunitoSans_700Bold,
        NunitoSans_800ExtraBold,
      });
    
      let fontSize = 24;
      let paddingVertical = 6;

    if (!fontsLoaded) {
        return <Text> hello </Text>
        // <AppLoading />
    } else {
        return (

            // <View style={style.screen}>
            //     {/* <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} /> */}
            //     <View>
            //         <View>
            //             <ProfileImage />
            //         </View>
                   
            //     {/* <Image style={styles.image} source={require('../Onboarding/images/moodImage.jpg')} /> */}
            //         <Text style={styles.text}>Kristen Ingelman</Text>
            //         <Text style={styles.text}>kristeningelman@hotmail.com</Text>
            //         <Button title="Edit profile" onPress={() => {
            //             props.navigation.navigate('EditProfile')
            //         }} />
            //     </View>
            // </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NunitoSans_400Regular',
          }}>
          Nunito Sans Regular
        </Text>


        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NunitoSans_600SemiBold',
          }}>
          Nunito Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NunitoSans_700Bold',
          }}>
          Nunito Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NunitoSans_800ExtraBold',
          }}>
          Nunito Sans Extra Bold
        </Text>


        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NunitoSans_900Black',
          }}>
          Nunito Sans Black
        </Text>
      </View>
        )
    }
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