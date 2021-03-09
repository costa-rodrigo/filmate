import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, StatusBar } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RBSheet from "react-native-raw-bottom-sheet";
import NoGroupsImage from '../../../svgs/NoGroupsImage';
import GreyButton from '../../../components/GreyButton';

const GroupScreen = props => {
    const { navigate } = props.navigation;

    const refRBSheet = useRef();
    
    // const onLogout = () => {
    //     console.log('logged out')

    // }

    return (
        <ScrollView style={styles.screen}>
           
            <View style={styles.user_info}>
                <Image style={styles.image} source={require('../../Onboarding/images/moodImage.jpg')} />
                <Text style={{color: 'white'}}>User Name</Text>
            </View>
            <View style={styles.button}>
            <Button  title="View profile" onPress={() => {
                    props.navigation.navigate('ProfileScreen')
                }} />
            </View>
            <View style={styles.search}>
                <SearchBar search="Search Groups"/>
            </View>
            <NoGroupsImage />
        <View style={styles.newGroup}>
            <Text style={styles.title}>You don’t have any groups.</Text>
            <Text style={styles.description}>Create groups by inviting friends.</Text>
            <GreyButton title="New group" onPress={() => {
                    props.navigation.navigate('NewGroupFilter')
                }} />
        </View>
        <Button title="start session" onPress={() => {
                props.navigation.navigate('navigation')
            }}/>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                // marginBottom: 
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#0A0A0A'
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
    search: {
        marginHorizontal: 30,
        marginTop: 10
    },
    groupOptions: {
        color: 'white', 
        textAlign: 'center', 
        marginTop: 10
    }
});

export default GroupScreen;