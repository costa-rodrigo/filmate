import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import FriendScreen from '../FriendScreens/FriendScreen';
import MainButton from '../../../components/MainButton';
import Checkmark from '../../../svgs/Checkmark';
export default class CreateGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          friendsArray: [], 
          addedFriends: [],
          noFriends: true,
          pressed: false,
        //   buttonColor: "white"
        
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
                // this.setState({ buttonColor: 'pink'})
                // this.setState({ backgroundColor: 'pink'})
            }
            this.setState({ addedFriends: this.state.addedFriends })
            console.log(this.state.addedFriends)
       }



    render() {
       
        const { pressed } = this.state;
        const { backgroundColor } = this.state;
        const { buttonColor } = this.state;
        const className = this.state.pressed ? 'blue' : 'red';

        const usersFriends = this.state.friendsArray.map((friend, index) => {
            return (
                <TouchableOpacity 
                    key={friend + "i"}
                    style={this.state.addedFriends.includes(friend) 
                        ? { 
                            borderWidth: 1.5, 
                            borderColor: '#56e6a5', 
                            backgroundColor: '#1E1E1E',
                            padding: 20,
                            marginHorizontal: 20,
                            marginVertical: 10,
                            borderRadius: 15,
                            paddingBottom: 30} 
                        : { 
                            backgroundColor: '#1E1E1E',
                            padding: 20,
                            marginHorizontal: 20,
                            marginVertical: 10,
                            borderRadius: 15,
                            paddingBottom: 30 }}
                    onPress={() => this.friendPressed(friend)}
                    >
                    <Text style={styles.friendText}>{friend}</Text>
                    {/* <Checkmark style={this.state.addedFriends.includes(friend) ? { display: 'inline'} : { display: 'none'} }/> */}
                </TouchableOpacity>
            )
        })

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
    },
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
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

