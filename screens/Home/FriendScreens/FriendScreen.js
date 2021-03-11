import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import NoFriends from '../FriendScreens/NoFriends';
import MainButton from '../../../components/MainButton';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/OptionsButton';
import ProfileImage from '../../../svgs/ProfileImage';
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
          change: 0,
         
        
      }
    //   this.selectionOnPress = this.selectionOnPress.bind(this);
      this.handleToken = this.handleToken.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.forceUpdate = this.forceUpdate.bind(this);
    }
    handleChange() {
        this.componentDidMount()
    }

    forceUpdate() {
        this.componentDidMount()
    }

    componentDidMount() {
        this.setState({});
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

    componentDidUpdate(prevProps) {
        // this.setState({ change })
        console.log(prevProps)
        if(this.state.friendsArray.length > 0) {
           console.log("checked array length")
        }
        // console.log("prev", this.state.friendsArray.length)
        // if (this.props.id !== prevProps.id) {
        //   let data = axios
        //   .get("https://jsonplaceholder.typicode.com/todos/" + this.props.id)
        //   .then(function(response) {
        //     return response;
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });
        //   this.setState({ todo: data.data });
    //     }
      }

    // selectionOnPress(friend) {
    //     // let friendName = friend;
    //     // console.log('friend', friendName)
    //     // this.setState({ friendName })
    // }


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
            console.log("friends", friends) 
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
      
        // const { buttonPressed } = this.state;

        const usersFriends = this.state.friendsArray.map((friend, index) => {
            // this.componentDidMount()
            return (
                <View>
                     <View
                        key={friend}
                        style={styles.friendContainer}
                        onPress={() => this.friendPressed(friend) && this.setState({ buttonPressed: !this.state.buttonPressed })}
                        >
                        <View style={styles.fullGrid}>

                       
                        <View style={styles.friendGrid}>
                            <ProfileImage style={{marginBottom: 40}}/>
                            <Text style={styles.friendText}>{friend}</Text>
                        </View>
                        <View>
                        <TouchableOpacity 
                                onPress={() => this.RBSheet.open()} 
                                style={{ width: 30, height: 30, borderRadius: '50%'}}>
                                <OptionsButton />
                            </TouchableOpacity>
                        </View>
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
                        backgroundColor: "white"
                        }
                    }}
                    >
                    <Text style={styles.options}>Friend Options</Text>
                    <Text style={{color: 'white'}}>Remove friend</Text>
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
        color: 'white',
        marginLeft: 15,
        marginBottom: 5
    },
    friendGrid: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fullGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    options: {
        textAlign: 'center',
        color: 'white',
        marginTop: 10
    }
});

export default FriendScreen;