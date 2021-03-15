import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RBSheet from "react-native-raw-bottom-sheet";
import NoGroupsImage from '../../../svgs//screens/NoGroupsImage';
import GreyButton from '../../../components/GreyButton';
import FriendTabButton from '../FriendTabButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
// import axios from "axios";

function GroupScreen({ route, navigation, props }) {
    const refRBSheet = useRef();
    
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.user_grid}>
                    <View style={styles.user_info}>
                        <ProfileImage />
                        <View>
                            <Text style={{color: 'white'}}> 👋</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('ProfileScreen')
                            }}>
                                <Text style={{color: '#f03349'}}>View profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FriendTabButton onPress={() => {
                            navigation.navigate('FriendScreen')
                        }} />
                </View>
           
                <SearchBar placeholder="Search groups"/>
            </View>
            <NoGroupsImage />
            <View style={styles.newGroup}>
                <Text style={styles.title}>You don’t have any groups.</Text>
                <Text style={styles.description}>Create groups by inviting friends.</Text>
                <GreyButton title="New group" onPress={() => {
                        navigation.navigate('NewGroupFilter')
                    }} />
            </View>
            <Button title="start session" onPress={() => {
                navigation.replace('navigation')
            }}/>
           
        <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                marginTop: 150
            }}
            >
            <Button title="Group Options" onPress={() => refRBSheet.current.open()} />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                container: {
                    backgroundColor: '#242424'
                },
                draggableIcon: {
                    backgroundColor: "white"
                }
                }}
             >
                {/* <YourOwnComponent /> */}
                <Text style={styles.groupOptions}>Group Options</Text>
                <Text>Match History</Text>
                <Text>Edit Group</Text>
                <Text>Exit Group</Text>
            </RBSheet>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#0A0A0A',
        height: '100%'
    },
    header: {
        backgroundColor: '#121212'
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    description: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },

    groupOptions: {
        color: 'white', 
        textAlign: 'center', 
        marginTop: 10
    },
    user_info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user_grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 45,
        marginRight: 45
    }
});

export default GroupScreen;