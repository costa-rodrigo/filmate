import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/icons/OptionsButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import style from '../../../Styles';

class UsersFriends extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          addedFriends: [],
          friendsArray: [], 
          noFriends: true, 
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
            if (friends.length !== 0 ) {
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

       friendPressed = (friend) => {
           this.setState({ backgroundColor: 'yellow'})
            if (this.state.addedFriends.includes(friend)) {
                console.log('friend already added')
                this.state.addedFriends.pop(friend)
            } else {
                this.state.addedFriends.push(friend)
            }
            // console.log(this.state.addedFriends)
       }

    render() {
        const usersFriends = this.state.friendsArray.map((friend, index) => {
            return (
                     <View
                        key={index}
                        style={styles.friendContainer}
                        onPress={() => this.friendPressed(friend) && this.setState({ buttonPressed: !this.state.buttonPressed })}
                        >
                        <View style={styles.fullGrid}>
                            <View style={styles.friendGrid}>
                                <ProfileImage />
                                <View style={{marginLeft: 15}}>
                                    <Text style={style.bold_med_small}>{friend}</Text>
                                </View>
                            </View>
                            <View>
                            <TouchableOpacity 
                                    onPress={() => this.RBSheet.open()} 
                                    style={styles.editButton}>
                                    <OptionsButton />
                                </TouchableOpacity>
                            </View>
                        </View>    
                    </View>
            )
        })

        const noFriends = this.state.noFriends;
        return (
            <ScrollView style={styles.scrollScreen}>
                    {[usersFriends]}
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
                        <Text style={style.centered_title}>Friend Options</Text>
                        <View style={{marginLeft: 20}}>
                            <Text style={style.paragraph_med_left}>Remove friend</Text>
                        </View>
                    </RBSheet>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    friendContainer: {
        backgroundColor: '#1E1E1E',
        marginVertical: 10,
        borderRadius: 15,
        paddingBottom: 30,
        width: 343,
        height: 64,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    friendText: {
        color: 'white',
        marginLeft: 15,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    friendGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 10
    },
    fullGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editButton: {
        width: 30, 
        height: 30, 
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 10,
        marginRight: 20
    }
});

export default UsersFriends;