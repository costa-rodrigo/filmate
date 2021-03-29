import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import NoGroupsImage from '../../../svgs//screens/NoGroupsImage';
import GreyButton from '../../../components/GreyButton';
import FriendTabButton from '../FriendTabButton';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import UsersGroups from '../GroupScreens/UsersGroups';
import axios from "axios";
import MainButton from '../../../components/MainButton';
import style from '../../../Styles';

class GroupScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          noFriends: true, 
          noGroups: true,
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
        await axios.get('https://filmate.ca/groups/', {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            const groups = res.data
            if (groups.length !== 0 ) {
                this.setState({ noGroups: false })
            } else {
                this.setState({ noGroups: true })
            }
    
            let allGroups = [];
            for (let i = 0; i < groups.length; i++) {
                let group = groups[i].group_id;
                allGroups.push(group)
            }
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
        const noGroups = this.state.noGroups;
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
                        <FriendTabButton onPress={() => {
                                this.props.navigation.navigate('FriendScreen')
                            }} />
                    </View>
                    <SearchBar placeholder="Search groups"/>
                </View>
                <View>
                    {noGroups === false
                    ? (
                        <View style={{height: '87%'}}>
                            <UsersGroups props={this.props}/>
                            <View>
                                <MainButton  title="New Group" onPress={() => {
                                    this.props.navigation.navigate('NewGroupFilter')}} />
                            </View>
                        </View>
                    )
                    : (
                        <View style={styles.newGroup}>
                            <NoGroupsImage />
                            <Text style={style.semi_bold_medium}>You don’t have any groups.</Text>
                            <Text style={style.semi_bold_medium}>Create groups by inviting friends.</Text>
                            <GreyButton title="New group" onPress={() => {
                                    this.props.navigation.navigate('NewGroupFilter')
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
    groupOptions: {
        color: 'white', 
        textAlign: 'center', 
        marginTop: 10
    },
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

export default GroupScreen;