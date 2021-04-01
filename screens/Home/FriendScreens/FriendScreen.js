import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import MainButton from '../../../components/MainButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import GroupTabButton from '../GroupTabButton';
import UsersFriends from './UsersFriends';
import SearchBar from '../../../components/SearchBar';
import style from '../../../Styles';
import NoFriendsImage from '../../../svgs/screens/NoFriendsImage';
import GreyButton from '../../../components/GreyButton';

class FriendScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          addedFriends: [],
          friendsArray: [], 
          noFriends: true, 
          userName: ''
      }
      this.handleToken = this.handleToken.bind(this);
    }
    componentDidMount() {
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                        let token = "Bearer " + store[0][1];
                        this.setState({ token })
                        resolve(storage)
                        this.handleToken(token)
                        this.handleUsername(token)
                      });
                    });
                  });
            } catch(error) {
                reject(new Error('Error getting storage from AsyncStorage: ' + error.message))
            }
        });
    }

    handleToken  = async (token) => {
        await axios.get('https://filmate.ca/friends/', {
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

       handleUsername  = async (token) => {
        await axios.get('https://filmate.ca/user/', {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            let username = res.data.name;
            this.setState({userName: username})
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
                        <Image style={{width: 54, height: 54, borderRadius: 50}} source={require('../../../assets/kristen.png')} />
                            {/* <ProfileImage /> */}
                            <View style={{marginLeft: 8}}>
                                <Text style={style.title}>{this.state.userName} 👋</Text>
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
                    <SearchBar placeholder="Search friends"/>
                </View>

                <View>
                    {noFriends === false
                    ? (
                        <View style={{height: '90%'}}>
                            <UsersFriends />
                            <View>
                                <MainButton title="Add Friends" onPress={() => {
                                this.props.navigation.navigate('AddFriends')}} />
                            </View>
                        </View>
                    ) 
                    : (
                        <View style={styles.newFriends}>
                            <NoFriendsImage />
                            <Text style={style.semi_bold_medium}>You don’t have any groups.</Text>
                            <Text style={style.semi_bold_medium}>Create groups by inviting friends.</Text>
                            <GreyButton title="Add Friends" onPress={() => {
                                    this.props.navigation.navigate('AddFriends')
                                }} />
                        </View>
                    )}
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
        justifyContent: 'space-between',
        width: 343,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default FriendScreen;