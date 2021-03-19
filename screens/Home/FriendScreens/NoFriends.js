import React, { useRef } from 'react';
import SearchBar from '../../../components/SearchBar';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
// import RBSheet from "react-native-raw-bottom-sheet";
import NoFriendsImage from '../../../svgs/screens/NoFriendsImage';
import MainButton from '../../../components/MainButton';
import style from '../../../Styles';
const NoFriends = (props) => {
    // const refRBSheet = useRef();
    // const { navigate } = props.navigation;
    return (
        <ScrollView style={style.screen}>        
        <View>
            <NoFriendsImage />
            <Text style={styles.title}>You don’t have any friends.</Text>
            <Text style={styles.description}>Add friends to create new groups.</Text>

            {/* <Button 
                title="Add Friends"
                onPress={() => {
                    props.navigation.navigate('AddFriends')
                }}
            /> */}
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
            {/* <Button title="Friend Options" onPress={() => refRBSheet.current.open()} /> */}
            {/* <RBSheet
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
                <YourOwnComponent />
                <Text>Friend Options</Text>
                <Text>Remove Friend</Text>
            
            </RBSheet> */}
    </View>
    {/* <MainButton title="Add Friends"
                onPress={() => {
                    props.navigation.navigate('AddFriends')
                }}/> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // newFriend: {
    //     marginVertical: 100,
    //     textAlign: 'center',
    //     borderWidth: 1,
    //     borderStyle: 'dashed',
    //     paddingVertical: 100,
    //     marginHorizontal: 30
    // },
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    description: {
        textAlign: 'center',
        marginBottom: 30,
        color: 'white'
    }
});

export default NoFriends;