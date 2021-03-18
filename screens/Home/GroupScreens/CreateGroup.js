import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SearchBar from '../../../components/SearchBar';
// import FriendScreen from '../FriendScreens/FriendScreen';
import MainButton from '../../../components/MainButton';
import Checkmark from '../../../svgs/icons/Checkmark';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import BlackCircle from '../../../svgs/icons/BlackCircle';
import { ActionSheetIOS } from 'react-native';

export default class CreateGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          friendsArray: [], 
          addedFriends: [],
          noFriends: true,
          pressed: false,
          currentFriends: '',
          groupName: this.props.route.params.groupName,
        
      }
      const { navigate } = props.navigation;
    //   this.getToken = this.getToken.bind(this);
      this.handleToken = this.handleToken.bind(this);
      this.friendPressed = this.friendPressed.bind(this);
    }

    componentDidMount() {
        // console.log("groupName in CreateGroup", this.state.groupName);
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                        //   console.log(store)
                        // let token = "Bearer " + store[0][1];
                        let token = "Bearer " + store[0][1];
                        // setToken(token)
                        this.setState({ token })
                        console.log("token from handlesubmit", token)
                        resolve(storage)
                        this.handleToken(token)
                        
                        // return token;
                      });
                    });
                  });

            } catch(error) {
                reject(new Error('Error getting storage from AsyncStorage: ' + error.message))
            }
        });

    }

    handleToken  = async (token) => {
        // console.log("handle token")
        //    console.log("handletoken")
        //    console.log(token)
        await axios.get('http://192.168.0.20:3000/friends',  {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            // this.setState({ noFriends: false })
            // const friends = res.data
            // console.log(friends) 
            // console.log(this.state.noFriends)
    
            // let allFriends = [];
            // for (let i = 0; i < friends.length; i++) {
            //     let friend = friends[i].friend_name;
            //     // console.log(friend)
            //     allFriends.push(friend)
            // }
            // this.setState({ friendsArray: allFriends })
            // console.log(this.state.friendsArray)

            const friends = res.data
            this.setState({currentFriends: friends})
            console.log("NEW", this.state.currentFriends)

            console.log(friends) 
            console.log(this.state.noFriends)
    
            let allFriends = [];
            for (let i = 0; i < friends.length; i++) {
                let friend = friends[i].friend_name;
                // console.log(friend)
                allFriends.push(friend)
            }
            this.setState({ friendsArray: allFriends })
            console.log(this.state.friendsArray)
        })
        .catch((error) => {
            console.error(error)
        })
       }

       removeAllElements(array, elem) {
        var index = array.indexOf(elem);
        while (index > -1) {
            array.splice(index, 1);
            index = array.indexOf(elem);
        }
    }

       friendPressed = (friend) => {
           this.setState({ pressed: !this.state.pressed })
            if (this.state.addedFriends.includes(friend)) {
                console.log('friend already added')
                this.removeAllElements(this.state.addedFriends, friend)
                this.setState({ pressed: !this.state.pressed })
                
            } else {
                this.state.addedFriends.push(friend)
            }
            this.setState({ addedFriends: this.state.addedFriends })
            console.log(this.state.addedFriends)
       }

       handleSubmit = async () => {
           console.log(this.state.currentFriends[0].friend_email);
           
           console.log(this.state.groupName)
           await axios.post('http://192.168.0.20:3000/groups-update', {
               email: this.state.currentFriends[0].friend_email,
               groupName: this.state.groupName
           })
           .then((response) => {
            console.log("currentFriends", this.state.currentFriends[0].friend_email)
            console.log("addedFriends", this.state.addedFriends)
            console.log(".then", this.state.groupName)
            this.props.navigation.navigate('GroupCreated')
            })
            .catch((error) => {
                console.error(error);
                console.log("catch error")
            })
       }

    render() {
        const { pressed } = this.state;
        const usersFriends = this.state.friendsArray.map((friend, index) => {
            return (
                <TouchableOpacity 
                    key={index}
                    style={this.state.addedFriends.includes(friend) 
                        ? { 
                            borderWidth: 1.5, 
                            borderColor: '#56e6a5', 
                            backgroundColor: '#1E1E1E',
                            marginVertical: 10,
                            borderRadius: 15,
                            paddingBottom: 30,
                            width: 343,
                            height: 64,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        } 
                        : { 
                            backgroundColor: '#1E1E1E',
                            marginVertical: 10,
                            borderRadius: 15,
                            paddingBottom: 30,
                            width: 343,
                            height: 64,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                         }
                        }
                    onPress={() => this.friendPressed(friend)}
                    >
                    <View style={styles.checkmark_grid}>
                        <View style={styles.friendGrid}>
                            <ProfileImage />
                            <Text style={styles.friendText}>{friend}</Text>
                        </View>
                        {
                            this.state.addedFriends.includes(friend) 
                            ? (
                                <View style={styles.circle}>
                                    <Checkmark />
                                </View>
                            )
                            : (
                                <View style={styles.circle}>
                                    <BlackCircle />
                                </View>
                            )
                        }
                    </View>
                    
                </TouchableOpacity>
            )
        })

        return (
            <View style={{marginBottom: 25, backgroundColor: '#0A0A0A', height: '100%' }}>
                <ScrollView style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Invite friends to your group.</Text>
                        <SearchBar placeholder="Search Friends" />
                    </View>
                    <View>
                    {usersFriends}
                    </View>        
                </ScrollView>
                <MainButton title="Invite" onPress={this.handleSubmit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#0A0A0A',
        // flex: 1
    },
    header: {
        backgroundColor: '#121212'
    },
    friendText: {
        color: 'white',
        marginLeft: 15,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginLeft: 45
    },
    friendGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 10
    },
    friendImage: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    checkmark_grid: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    circle: {
        marginTop: 20,
        marginBottom: 10,
        marginRight: 20
    }
});

