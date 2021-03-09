import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import NoFriends from '../FriendScreens/NoFriends';
import MainButton from '../../../components/MainButton';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/OptionsButton';

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
        
      }
      this.selectionOnPress = this.selectionOnPress.bind(this);
      this.handleToken = this.handleToken.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    componentDidMount() {
        console.log(this.state.noFriends)
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
                      });
                    });
                  });

            } catch(error) {
                reject(new Error('Error getting storage from AsyncStorage: ' + error.message))
            }
        });

    }

    selectionOnPress(friend) {
        // let friendName = friend;
        // console.log('friend', friendName)
        // this.setState({ friendName })
    }


    handleToken  = async (token) => {
        await axios.get('http://192.168.0.20:3000/friends',  {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            const friends = res.data
            if (friends.length !== 0 ) {
                this.setState({ noFriends: false })
            } else {
                this.setState({ noFriends: true })
            }
            // console.log("friends", friends) 
            // console.log(this.state.noFriends)
    
            let allFriends = [];
            for (let i = 0; i < friends.length; i++) {
                let friend = friends[i].friend_name;
                // console.log(friend)
                allFriends.push(friend)
            }
            this.setState({ friendsArray: allFriends })
            // console.log(this.state.friendsArray)
        })
        .catch((error) => {
            console.error(error)
        })
       }

       friendPressed = (friend) => {
           this.setState({ backgroundColor: 'yellow'})
            if (this.state.addedFriends.includes(friend)) {
                console.log('friend already added')
                this.state.addedFriends.pop(friend)
            } else {
                this.state.addedFriends.push(friend)
                // this.setState({ backgroundColor: 'pink'})
            }
            // add else if - more than 6 in an arry - display message that says too many participants
            // this.setState({ addedFriends })
            console.log(this.state.addedFriends)
       }

       forceUpdateHandler() {
           this.componentDidMount()
        //    this.setState({ noFriends })
           console.log('force')
       };

    render() {
        const { buttonPressed } = this.state;

        const usersFriends = this.state.friendsArray.map((friend, index) => {
            return (
                <View>
                     <View
                        key={index}
                        style={styles.friendContainer}
                        onPress={() => this.friendPressed(friend) && this.setState({ buttonPressed: !this.state.buttonPressed })}
                        >
                        <View style={styles.friendGrid}>
                            <Text style={styles.friendText}>{friend}</Text>
                            <TouchableOpacity 
                                onPress={() => this.RBSheet.open()} 
                                style={{ width: 30, height: 30, borderRadius: '50%'}}>
                                <OptionsButton />
                            </TouchableOpacity>
                        </View>
                </View>
                </View>
               
            )
        })

        const noFriends = this.state.noFriends;

        return (
            <ScrollView style={styles.screen}>
                <Button onPress={this.forceUpdateHandler} title="refresh"/>
            <View style={styles.screen}>
            </View>
            <View>
                {noFriends == true ? (
                    <NoFriends navigation={this.props.navigation} noFriends={this.state.noFriends}/>
                ) : (
                    [usersFriends]
                )
            }
            </View>
            <View style={{height: 150}}>
                <MainButton title="Add Friends" onPress={() => {
                        this.props.navigation.navigate('AddFriends')}} />
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} /> */}
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    closeOnDragDown={true}
                    customStyles={{
                        wrapper: {
                        backgroundColor: "transparent"
                        },
                        container: {
                            backgroundColor: '#242424'
                        },
                        draggableIcon: {
                        backgroundColor: "#000"
                        }
                    }}
                    >
                    <Text>Remove friend</Text>
                </RBSheet>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#0A0A0A',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    },
    description: {
        textAlign: 'center',
        marginBottom: 40
    },
    friendContainer: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        paddingBottom: 30,
        height: 70
    },
    friendText: {
        color: 'white'
    },
    friendGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    }
});

export default FriendScreen;