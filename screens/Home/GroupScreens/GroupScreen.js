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
import style from '../../../Styles';

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
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                        //   console.log("store", store)
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
            console.log(res.data)
            const groups = res.data
            if (groups.length !== 0 ) {
                this.setState({ noGroups: false })
            } else {
                this.setState({ noGroups: true })
            }
            // console.log("friends", groups) 
            // console.log(this.state.noGroups)
    
            let allGroups = [];
            for (let i = 0; i < groups.length; i++) {
                let group = groups[i].group_id;
                // console.log(friend)
                allGroups.push(group)
            }
            this.setState({ GroupsArray: allGroups })
            // console.log(this.state.GroupsArray)
        })
        .catch((error) => {
            console.error(error)
        })
       }


    render() {
        const noGroups = this.state.noGroups;
        return (
            <View style={style.screen}>
                <View style={style.header}>
                    <View style={styles.user_grid}>
                        <View style={styles.user_info}>
                            <ProfileImage />
                            <View style={{marginLeft: 8}}>
                                <Text style={style.title}>Username 👋</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('ProfileScreen')
                                }}>
                                    <Text style={{color: '#f03349', fontSize: 12, fontFamily: 'Nunito-ExtraBold'}}>View profile</Text>
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
                        // <View style={{marginBottom: 50}}>
                        //     <UsersGroups props={this.props}/>
                        //     <MainButton title="New Group" 
                        //         onPress={() => {
                        //         this.props.navigation.navigate('NewGroupFilter')}}/>
                        // </View>
                            <View style={{height: '87%'}}>
                                <UsersGroups props={this.props}/>
                                <View>
                                    <MainButton  title="New Group" onPress={() => {
                                        this.props.navigation.navigate('NewGroupFilter')}} />
                                </View>
                                </View>
                        
                        
                    )
                    : (
                        <View style={styles.newGroup}>
                        <NoGroupsImage />
                        <Text style={style.semi_bold_medium}>You don’t have any groups.</Text>
                        <Text style={style.semi_bold_medium}>Create groups by inviting friends.</Text>
                        <GreyButton title="New group" onPress={() => {
                                this.props.navigation.navigate('NewGroupFilter')
                            }} />
                        </View>
                    )
                }

                {/* <Button title="start session" onPress={() => {
                    this.props.navigation.replace('navigation')
                }}/> */}
                </View>
            </View>
        )

    }
    
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    description: {
        textAlign: 'center',
        color: 'white'
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
        width: 343,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default GroupScreen;