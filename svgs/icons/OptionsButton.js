import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export default function OptionsButton() {
    return (
        <View style={styles.image}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                <G id="Group_528" data-name="Group 528" transform="translate(-309 -240)">
                    <Path id="Path_45" data-name="Path 45" d="M17,0A17,17,0,1,1,0,17,17,17,0,0,1,17,0Z" transform="translate(309 240)" fill="#242424"/>
                    <G id="Group_527" data-name="Group 527" transform="translate(0 -3.336)">
                    <Path id="Path_13" data-name="Path 13" d="M17.215,15.328a1.9,1.9,0,1,0,1.9,1.9,1.9,1.9,0,0,0-1.9-1.9Z" transform="translate(308.379 243.009)" fill="#d2d5d5"/>
                    <Path id="Path_14" data-name="Path 14" d="M6.4,15.328a1.9,1.9,0,1,0,1.9,1.9,1.9,1.9,0,0,0-1.9-1.9Z" transform="translate(311.5 243.009)" fill="#d2d5d5"/>
                    <Path id="Path_15" data-name="Path 15" d="M28.057,15.328a1.9,1.9,0,1,0,1.9,1.9,1.9,1.9,0,0,0-1.9-1.9Z" transform="translate(305.25 243.009)" fill="#d2d5d5"/>
                    </G>
                </G>
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

