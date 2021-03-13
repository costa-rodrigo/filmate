import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

export default function Heart() {
    return (
        <View>
            <Svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                <G id="Group_973" data-name="Group 973" transform="translate(-204 -636)">
                    <Path id="Path_157" data-name="Path 157" d="M36,0A36,36,0,1,1,0,36,36,36,0,0,1,36,0Z" transform="translate(204 636)" fill="#242424"/>
                    <Path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M27.106,4.044a8.018,8.018,0,0,0-10.941.8L15.01,6.031l-1.155-1.19a8.018,8.018,0,0,0-10.941-.8,8.419,8.419,0,0,0-.58,12.19L13.679,27.948a1.838,1.838,0,0,0,2.656,0L27.68,16.234a8.414,8.414,0,0,0-.575-12.19Z" transform="translate(224.991 656.619)" fill="#56e6a5"/>
                </G>
            </Svg>
        </View>
    )
}



