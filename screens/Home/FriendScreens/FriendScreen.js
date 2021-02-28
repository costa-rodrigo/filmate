import React, { useRef } from 'react';
import SearchBar from '../../../components/SearchBar';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

const FriendScreen = props => {
    const refRBSheet = useRef();
    return (
        <ScrollView style={styles.screen}>
            <SearchBar style={styles.search} search="Search Friends"/>
        
        <View style={styles.newFriend}>
            <Text style={styles.title}>No Friends Yet</Text>
            <Text style={styles.description}>Start by inviting your friends and adding new groups</Text>
            <Button 
                title="Add Friends"
                onPress={() => {
                    props.navigation.navigate('AddFriends')
                }}
            />
        </View>

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                marginBottom: 80
            }}
            >
            <Button title="Friend Options" onPress={() => refRBSheet.current.open()} />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
                }}
            >
                {/* <YourOwnComponent /> */}
                <Text>Friend Options</Text>
                <Text>Remove Friend</Text>
            
            </RBSheet>
    </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    newFriend: {
        marginVertical: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        paddingVertical: 100,
        marginHorizontal: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    description: {
        textAlign: 'center',
        marginBottom: 30
    }

});

export default FriendScreen;