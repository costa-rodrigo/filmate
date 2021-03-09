import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import FriendScreen from '../FriendScreens/FriendScreen';
import MainButton from '../../../components/MainButton';

export default class CreateGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          friendsArray: [], 
          addedFriends: [],
          noFriends: true
        
      }
      const { navigate } = props.navigation;
    //   this.getToken = this.getToken.bind(this);
      this.handleToken = this.handleToken.bind(this);
      this.friendPressed = this.friendPressed.bind(this);
    }

    componentDidMount() {
        // console.log("get token")
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                        //   console.log(store)
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
            const friends = res.data
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

       friendPressed = (friend) => {
            if (this.state.addedFriends.includes(friend)) {
                console.log('friend already added')
                this.state.addedFriends.pop(friend)
            } else {
                this.state.addedFriends.push(friend)

            }
            // this.setState({ addedFriends })
            console.log(this.state.addedFriends)
       }



    render() {
        const usersFriends = this.state.friendsArray.map((friend, index) => {
            return (
                <TouchableOpacity 
                    key={index}
                    style={styles.friendContainer}
                    onPress={() => this.friendPressed(friend)}
                    >
                    <Text style={styles.friendText}>{friend}</Text>
                </TouchableOpacity>
            )
        })

        // const noFriends = this.state.noFriends;

        return (
            <ScrollView style={styles.screen}>
            
                <Text style={styles.title}>Invite friends to your group.</Text>
          
                {usersFriends}
                {/* <FriendScreen /> */}
                {/* {noFriends == true ? (
                    <FriendScreen />
                ) : (
                    usersFriends
                )
                } */}
                <MainButton title="Invite" onPress={() => {
                    this.props.navigation.navigate('InvitedToGroup')
                }}/>
           
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#0A0A0A'
    },
    friendContainer: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        // marginBottom: 30
        paddingBottom: 30
    },
    friendText: {
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 20
    }
    // screen: {
    //     paddingHorizontal: 20,
    //     paddingTop: 50
    // },
    // title: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     marginBottom: 60
    // },
    // description: {
    //     textAlign: 'center',
    //     marginBottom: 40
    // }


});

