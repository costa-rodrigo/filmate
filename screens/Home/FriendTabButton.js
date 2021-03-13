import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import NoFriends from './FriendScreens/NoFriends';
import GroupScreen from './GroupScreens/GroupScreen';
import FriendScreen from './FriendScreens/FriendScreen';

const FriendTabButton = props => {
    return (
        <View style={styles.grid}>
             <TouchableOpacity style={styles.buttonActive}>
                <Text style={styles.buttonText}>Groups</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonInactive} onPress={props.onPress}>
                <Text style={styles.buttonText}>Friends</Text>
             </TouchableOpacity>
        </View>
    )
}


// class FriendTabButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             buttonPressed: true,
//         }
//     }
//     render() {
//         // const FriendTabButton = props => {
//     const handleGroupPress = () => {
//         console.log("group press")
//         let text = (
//             <Text>hello</Text>
//         )
//         return text;
//     }

//     // let text = (
//     //     // <NoFriends />
//     // )

//     const handleFriendPress = () => {
//         console.log("friend press")
//     }
//     let text = (
//         <NoFriends />
//     )
//     const {buttonPressed} = this.state;
//         return (
//             <View style={styles.grid}>
//             <TouchableOpacity style={styles.buttonActive} onPress={() => {
//                 let text = <NoFriends />
//             }}>
//                <Text style={styles.buttonText}>Groups</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttonActive} onPress={handleFriendPress}>
//                <Text style={styles.buttonText}>Friends</Text>
//             </TouchableOpacity>
//             <View>
//                 {buttonPressed === false
//                 ? (
//                     <GroupScreen />
//                 )
//                 : (
//                     <FriendScreen />
//                 )}
//                {/* {text} */}
//            </View>
            
//        </View>

//         )
//     }


 
// }

const styles = StyleSheet.create({
    grid: {
        // flexDirection: 'row',
        
    },
    buttonActive: {
        backgroundColor: '#242424',
        padding: 15,
        borderRadius: 10,
        // height: '50%'
        // width: 80
    },
    buttonInactive: {
        padding: 15,
        borderRadius: 15,
        // width: 80,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default FriendTabButton;