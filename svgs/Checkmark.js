import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Checkmark() {
    return (
        <View style={styles.onboardingImage}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <Path id="Icon_ionic-ios-checkmark-circle" data-name="Icon ionic-ios-checkmark-circle" d="M15.375,3.375a12,12,0,1,0,12,12A12,12,0,0,0,15.375,3.375Zm6.144,8.683-7.713,7.748H13.8a1.042,1.042,0,0,1-.669.317,1.01,1.01,0,0,1-.675-.329L9.225,16.563a.23.23,0,0,1,0-.329l1.027-1.027a.223.223,0,0,1,.323,0l2.562,2.562,7.038-7.09a.228.228,0,0,1,.162-.069h0a.209.209,0,0,1,.162.069l1.01,1.044A.227.227,0,0,1,21.519,12.058Z" transform="translate(-3.375 -3.375)" fill="#80e2aa"/>
          </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});

