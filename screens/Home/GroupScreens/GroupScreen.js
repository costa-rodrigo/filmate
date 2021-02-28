import React, { useRef } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RBSheet from "react-native-raw-bottom-sheet";

const GroupScreen = props => {

    const { navigate } = props.navigation;

    const refRBSheet = useRef();
    
    const onLogout = () => {
        console.log('logged out')

    }

    return (
        <ScrollView style={styles.screen}>
            {/* <Text>otherParam: {otherParam}</Text> */}
            <SearchBar style={styles.search} search="Search Groups"/>
            <View style={styles.user_info}>
                <Image style={styles.image} source={require('../../Onboarding/images/moodImage.jpg')} />
                <Text>Kristen</Text>
            </View>
            <View style={styles.button}>
            <Button  title="View profile" onPress={() => {
                    props.navigation.navigate('ProfileScreen')
                }} />

            </View>
           
        <View style={styles.newGroup}>
            <Text style={styles.title}>Your groups will appear here!</Text>
            <Text style={styles.description}>Start by inviting your friends and adding new groups</Text>
            <Button 
                title="New Group"
                onPress={() => {
                    props.navigation.navigate('NewGroupFilter')
                }}
            />
            <Button title="start session" onPress={() => {
                props.navigation.navigate('navigation')
            }}/>
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
            <Button title="Group Options" onPress={() => refRBSheet.current.open()} />
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
                <Text>Group Options</Text>
                <Text>Match History</Text>
                <Text>Edit Group</Text>
                <Text>Exit Group</Text>
            </RBSheet>
    </View>

        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    newGroup: {
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    }
});

export default GroupScreen;

// import React, { Component } from "react";
// import { View, Button, Text } from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";
 
// export default class Example extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Button title="Group Options" onPress={() => this.RBSheet.open()} />
//         <RBSheet
//           ref={ref => {
//             this.RBSheet = ref;
//           }}
//           height={300}
//           openDuration={250}
//           customStyles={{
//             container: {
//               justifyContent: "center",
//               alignItems: "center"
//             }
//           }}
//         >
//           {/* <YourOwnComponent /> */}
//           <Text>Group Options</Text>
//           <Text>Match History</Text>
//           <Text>Edit Group</Text>
//           <Text>Exit Group</Text>
//         </RBSheet>
//       </View>
//     );
//   }
// }