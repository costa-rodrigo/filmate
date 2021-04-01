import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Arrow() {
    return (
        <View style={styles.arrow}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="6.861" height="12" viewBox="0 0 6.861 12">
                <Path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M16.039,12.194,11.5,7.657a.854.854,0,0,1,0-1.211.865.865,0,0,1,1.215,0l5.145,5.141a.856.856,0,0,1,.025,1.183l-5.166,5.177A.858.858,0,0,1,11.5,16.735Z" transform="translate(-11.246 -6.196)" fill="#686e77"/>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    arrow: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});




