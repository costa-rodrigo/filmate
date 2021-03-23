import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
// import NoFriends from '../FriendScreens/NoFriends';
// import MainButton from '../../../components/MainButton';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/icons/OptionsButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
// import GroupTabButton from '../GroupTabButton';
import PinkButton from '../../../components/PinkButton';
import MainButton from '../../../components/MainButton';

class UsersGroups extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
        //   addedFriends: [],
          GroupsArray: [], 
          noGroups: true, 
          groupIdArray: [],
          group_id: ''
        //   selectedFriends: [],
      }
      this.handleToken = this.handleToken.bind(this);
    //   this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    // componentDidMount() {
    //     // console.log("PROPS", this.props.props.navigation.navigate)


    // }


    //    handleMembers = () => {
    //     //    let group_id = req.body.group_id;
    //        axios.get('http://192.168.0.20:3000/group', {
    //            group_id: "1"
    //        })
    //        .then((response) => {
    //            console.log("HELLO", response)
    //        })
    //        .catch((error) => {
    //            console.error(error)
    //        })
    //    }

    //    handleMembers  = async () => {
    //     console.log("handleMembers")
    //     await axios.get('http://192.168.0.20:3000/group', {
    //         group_id: this.state.group_id
            
    //     })
    //     console.log(group_id)
    //     .then((response) => {
    //         console.log("GIRAFFE", response)
    //         console.log(".then")
    //         // console.log(".then", groupName)
    //         // navigate('CreateGroup', {groupName: groupName})
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //         console.log("catch error")

    //     })
           

    //    }

    render() {
        const { navigation } = this.props.props;
        const usersGroups = this.state.GroupsArray.map((group, index) => {
            return (
               
                     <View
                        key={index}
                        style={styles.friendContainer}
                        >
                        <View style={styles.fullGrid}>

                       
                        <View style={styles.friendGrid}>
                            {/* <ProfileImage /> */}
                            <Text style={styles.friendText}>{group}</Text>
                        </View>
                        <View>
                            <TouchableOpacity 
                                    onPress={() => this.RBSheet.open()} 
                                    style={styles.editButton}>
                                    <OptionsButton />
                            </TouchableOpacity>
                        </View>
                        </View>    
                        <PinkButton title="SWIPE" onPress={() => {
                            navigation.navigate('navigation')
                         }}/>
                    </View>
              
            )
        })
        
        return (
            <ScrollView style={styles.scrollScreen}>
                    <Button title="members" onPress={() => { this.props.navigation.navigate('Practice')
         }}/>
                    {[usersGroups]}
                    {/* <MainButton title="New Group"/> */}

                    <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginTop: 150
                }}>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
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
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        // flexDirection: 'column'
        
    },
    scrollScreen: {
        // backgroundColor: '#0A0A0A',

    },
    friendContainer: {
        backgroundColor: '#1E1E1E',
        marginVertical: 10,
        borderRadius: 15,
        paddingBottom: 30,
        width: 343,
        height: 176,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    friendText: {
        color: 'white',
        marginLeft: 15,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    friendGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 10
    },
    fullGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    options: {
        textAlign: 'center',
        color: 'white',
        marginTop: 10
    },
    editButton: {
        width: 30, 
        height: 30, 
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 10,
        marginRight: 20
    }
});

export default UsersGroups;