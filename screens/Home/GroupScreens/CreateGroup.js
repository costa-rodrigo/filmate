import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SearchBar from '../../../components/SearchBar';
import MainButton from '../../../components/MainButton';
import Checkmark from '../../../svgs/icons/Checkmark';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import BlackCircle from '../../../svgs/icons/BlackCircle';
import style from '../../../Styles';

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
      this.handleToken = this.handleToken.bind(this);
      this.friendPressed = this.friendPressed.bind(this);
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
        await axios.get('https://filmate.ca/friends/', {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            const friends = res.data
            this.setState({currentFriends: friends})
    
            let allFriends = [];
            for (let i = 0; i < friends.length; i++) {
                let friend = [friends[i].friend_name, friends[i].friend_email]
                allFriends.push(friend)
            }
            this.setState({ friendsArray: allFriends })
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
                let user_email = this.state.addedFriends[0][1]
            }
            this.setState({ addedFriends: this.state.addedFriends })
       }

       handleSubmit = async () => {
           await axios.post('https://filmate.ca/groups-update/', {
                groupName: this.state.groupName,   
                email: this.state.addedFriends[0][1]
           })
           .then((response) => {
            this.props.navigation.navigate('GroupCreated')
            })
            .catch((error) => {
                console.error(error);
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
                            <View style={{marginLeft: 15}}>
                                <Text style={style.bold_med_small}>{friend[0]}</Text>
                            </View>
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
            <View style={style.screen}>
                <View style={style.header}>
                    <Text style={style.h3_heading}>Invite friends to your group.</Text>
                    <SearchBar placeholder="Search Friends" />
                </View>
                <ScrollView>
                    {usersFriends}
                </ScrollView>
                <MainButton title="Invite" onPress={this.handleSubmit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

