import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import NoFriends from '../FriendScreens/NoFriends';
import MainButton from '../../../components/MainButton';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/icons/OptionsButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import GroupTabButton from '../GroupTabButton';
import UsersFriends from './UsersFriends';
import { Alert } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import style from '../../../Styles';
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

    // componentDidUpdate(prevProps) {
    
    //     if(this.state.friendsArray.length > 0) {
    //        console.log("checked array length")
    //     }
    //   }

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
                <View style={styles.header}>
                    <View style={styles.user_grid}>             
                        <View style={styles.user_info}>
                            <ProfileImage />
                            <View>
                                <Text style={{color: 'white'}}> 👋</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('ProfileScreen')
                                }}>
                                    <Text style={{color: '#f03349', marginLeft: 8, marginTop: 6}}>View profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <GroupTabButton onPress={() => {
                                this.props.navigation.replace('GroupScreen')
                            }} />
                    </View>
                    <SearchBar placeholder="Search your friends"/>
                </View>

                <View>
                    {noFriends === false
                    ? (
                        // fix this here! button is not in the right spot
                        <View style={{height: '90%'}}>
                            <UsersFriends />
                            <View>
                            {/* <View style={{marginBottom: 25}}> */}
                                <MainButton  title="Add Friends" onPress={() => {
                                this.props.navigation.navigate('AddFriends')}} />
                            </View>
                        </View>
                    ) 
                    : (
                        <View>
                        <NoFriends navigation={this.props.navigation} noFriends={this.state.noFriends}/>
                        <MainButton title="Add Friends"
                        onPress={() => {
                            this.props.navigation.navigate('AddFriends')
                        }}/>
                        </View>
                    )
                }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#121212'
    },
    // title: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     marginBottom: 60
    // },
    // description: {
    //     textAlign: 'center',
    //     marginBottom: 40
    // },
    // friendContainer: {
    //     backgroundColor: '#1E1E1E',
    //     padding: 20,
    //     marginHorizontal: 20,
    //     marginVertical: 10,
    //     borderRadius: 15,
    //     paddingBottom: 30,
    //     height: 70
    // },
    // friendText: {
    //     color: 'white',
    //     marginLeft: 15,
    //     marginBottom: 5
    // },
    // friendGrid: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },
    // fullGrid: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    // options: {
    //     textAlign: 'center',
    //     color: 'white',
    //     marginTop: 10
    // },
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

export default FriendScreen;