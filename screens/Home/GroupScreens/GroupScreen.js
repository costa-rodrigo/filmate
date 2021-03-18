import React, { useRef, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, Button, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RBSheet from "react-native-raw-bottom-sheet";
import NoGroupsImage from '../../../svgs//screens/NoGroupsImage';
import GreyButton from '../../../components/GreyButton';
import FriendTabButton from '../FriendTabButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import UsersGroups from '../GroupScreens/UsersGroups';
import axios from "axios";
import MainButton from '../../../components/MainButton';

class GroupScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          addedFriends: [],
          GroupsArray: [], 
        //   noFriends: true, 
          noGroups: true,
          selectedFriends: [],
          change: 0
      }
      this.handleToken = this.handleToken.bind(this);
    }
// function GroupScreen({ route, navigation, props }) {
    // const refRBSheet = useRef();

    componentDidMount() {
        // this.setState({});
        console.log(this.state.noGroups)
        // console.log("get token")
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                          console.log("store", store)
                        let token = "Bearer " + store[0][1];
                        // setToken(token)
                        this.setState({ token })
                        console.log("token from groupScreen", token)
                        resolve(storage)
                        this.handleToken(token)
                      });
                    });
                  });
            } catch(error) {
                reject(new Error('Error getting storage from AsyncStorage: ' + error.message))
            }
        });
    }

    handleToken  = async (token) => {
        await axios.get('http://192.168.0.20:3000/groups',  {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            console.log("then")
            console.log(res.data)
            const groups = res.data
            if (groups.length !== 0 ) {
                this.setState({ noGroups: false })
            } else {
                this.setState({ noGroups: true })
            }
            console.log("friends", groups) 
            console.log(this.state.noGroups)
    
            let allGroups = [];
            for (let i = 0; i < groups.length; i++) {
                let group = groups[i].group_id;
                // console.log(friend)
                allGroups.push(group)
            }
            this.setState({ GroupsArray: allGroups })
            console.log(this.state.GroupsArray)
        })
        .catch((error) => {
            console.error(error)
        })
       }


    render() {
        const noGroups = this.state.noGroups;
        return (
            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={styles.user_grid}>
                        <View style={styles.user_info}>
                            <ProfileImage />
                            <View>
                                <Text style={{color: 'white'}}> 👋</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('ProfileScreen')
                                }}>
                                    <Text style={{color: '#f03349'}}>View profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FriendTabButton onPress={() => {
                                this.props.navigation.navigate('FriendScreen')
                            }} />
                    </View>
               
                    <SearchBar placeholder="Search groups"/>
                </View>
                {/* <UsersGroups /> */}
                <View>
                    {noGroups === false
                    ? (
                        <View>
                            <UsersGroups props={this.props}/>
                            {/* <PinkButton title="SWIPE" onPress={() => {
                            this.props.navigation.navigate('FriendScreen')
                }}/> */}
                        <MainButton title="New Group" 
                            onPress={() => {
                                this.props.navigation.navigate('NewGroupFilter')}}/>
                        </View>
                        
                        
                    )
                    : (
                        <View style={styles.newGroup}>
                        <NoGroupsImage />
                        <Text style={styles.title}>You don’t have any groups.</Text>
                        <Text style={styles.description}>Create groups by inviting friends.</Text>
                        <GreyButton title="New group" onPress={() => {
                                this.props.navigation.navigate('NewGroupFilter')
                            }} />
                        </View>
                    )
                }

                <Button title="start session" onPress={() => {
                    this.props.navigation.replace('navigation')
                }}/>
                </View>
                
            </View>
        )

    }
    
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