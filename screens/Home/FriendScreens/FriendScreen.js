import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
// import NoFriends from '../FriendScreens/NoFriends';
import MainButton from '../../../components/MainButton';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/icons/OptionsButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import GroupTabButton from '../GroupTabButton';
import UsersFriends from './UsersFriends';
import { Alert } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import style from '../../../Styles';
import NoFriendsImage from '../../../svgs/screens/NoFriendsImage';
import GreyButton from '../../../components/GreyButton';
// checkbox article:
// https://reactnativemaster.com/multiple-select-checkbox-in-react-native/
class FriendScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          addedFriends: [],
          friendsArray: [], 
          noFriends: true, 
          selectedFriends: [],
          change: 0
      }
      this.handleToken = this.handleToken.bind(this);
    //   this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    componentDidMount() {
        // this.setState({});
        console.log(this.state.noFriends)
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
                        console.log("token from handlesubmit", token)
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
        await axios.get('http://192.168.0.20:3000/friends',  {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            const friends = res.data
            if (friends.length > 0 ) {
                this.setState({ noFriends: false })
            } else {
                this.setState({ noFriends: true })
            }
            // console.log("friends", friends) 
    
            let allFriends = [];
            for (let i = 0; i < friends.length; i++) {
                let friend = friends[i].friend_name;
                allFriends.push(friend)
            }
            this.setState({ friendsArray: allFriends })
        })
        .catch((error) => {
            console.error(error)
        })
       }

    render() {
        const noFriends = this.state.noFriends;
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
                        <GroupTabButton onPress={() => {
                                this.props.navigation.replace('GroupScreen')
                            }} />
                    </View>
                    <SearchBar placeholder="Search your friends"/>
                </View>
                {/* <NoFriends /> */}

                <View>
                    {noFriends === false
                    ? (
                        // fix this here! button is not in the right spot
                        <View style={{height: '90%'}}>
                            <UsersFriends />
                            <View>
                                <MainButton  title="Add Friends" onPress={() => {
                                this.props.navigation.navigate('AddFriends')}} />
                            </View>
                        </View>
                    ) 
                    : (
                        <View style={styles.newFriends}>
                        <NoFriendsImage />
                        <Text style={styles.title}>You don’t have any groups.</Text>
                        <Text style={styles.description}>Create groups by inviting friends.</Text>
                        <GreyButton title="Add Friends" onPress={() => {
                                this.props.navigation.navigate('AddFriends')
                            }} />
                        </View>
                    )
                }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    user_info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user_grid: {
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35
    },
    title: {
        color: 'white',
    },
    description: {
        color: 'white'
    }
});

export default FriendScreen;