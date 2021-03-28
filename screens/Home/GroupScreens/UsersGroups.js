import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import RBSheet from "react-native-raw-bottom-sheet";
import OptionsButton from '../../../svgs/icons/OptionsButton';
import PinkButton from '../../../components/PinkButton';
import Arrow from '../../../svgs/icons/Arrow';
import ProfileImage from '../../../svgs/icons/ProfileImage';
import style from '../../../Styles';

class UsersGroups extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          token: '',
          GroupsArray: [], 
          noGroups: true, 
          groupIdArray: [],
          group_id: '',
          group_members: [],
          final_members: []
      }
      this.handleToken = this.handleToken.bind(this);
    //   this.handleMembers = this.handleMembers.bind(this);
    }

    componentDidMount() {
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                        //   console.log("store", store)
                        let token = "Bearer " + store[0][1];
                        this.setState({ token })
                        // console.log("token from handlesubmit", token)
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
        await axios.get('http://192.168.0.20:3000/groups',  {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            console.log(res.data)
            const groups = res.data
            if (groups.length !== 0 ) {
                this.setState({ noGroups: false })
            } else {
                this.setState({ noGroups: true })
            }
            console.log("friends", groups) 
    
            let allGroups = [];
            let allGroupIds = [];
            for (let i = 0; i < groups.length; i++) {
                let group = groups[i].group.name;
                let group_id = groups[i].group_id;
                allGroupIds.push(group_id)
                this.setState({groupIdArray: allGroupIds})
                allGroups.push(group)

                const PromiseArr = [];
                for (let i = 0; i < groups.length; i++) {
                    PromiseArr.push(
                        axios.post('http://192.168.0.20:3000/group', {
                            group_id: groups[i].group_id
                        })
                        .then(result => 
                            new Promise(resolve => resolve(result.data)))
                    );
                }

                Promise.all(PromiseArr).then(res => {
                    console.log("res", res)
                    // creating group_members array
                    this.setState({group_members: [res[0][0].user.name, res[0][1].user.name]})
                    console.log(this.state.group_members)
                })
            }
            console.log("allGroupIds", allGroupIds[0])
            console.log(this.state.groupIdArray[0])
            this.setState({ GroupsArray: allGroups })
            console.log(this.state.GroupsArray)
        })
        .catch((error) => {
            console.error(error)
        })
       }

    render() {
        const { navigation } = this.props.props;
        const groupMembers = this.state.group_members;
        // const final_members = this.state.final_members;
        const usersMembers = this.state.final_members.map((member, index) => {
            return (
                <Text style={{color: 'white'}}>{member}</Text>
            )
        })
        
        const usersGroups = this.state.GroupsArray.map((group, index) => {
            return (
                     <View key={index} style={styles.friendContainer}>
                        <View style={styles.fullGrid}>
                            {/* <View style={styles.friendGrid}> */}
                            <View style={{marginLeft: 40}}>
                                <View style={{flexDirection: 'row', marginTop: 10, position: 'relative'}}>
                                    <ProfileImage />
                                    <View style={{position: 'absolute', marginLeft: 40}}>
                                        <ProfileImage />
                                    </View>
                                </View>
                                <Text style={style.h3_heading}>{group}</Text>
                                <Text style={style.paragraph_small}>{groupMembers[0]}, {groupMembers[1]}</Text>
                            </View>
                                <TouchableOpacity onPress={() => this.RBSheet.open()} style={styles.editButton}>
                                    <OptionsButton />
                                </TouchableOpacity>
                        </View>  
                        <View style={{position: 'absolute', marginLeft: '71%', marginTop: '30%'}}>
                            <PinkButton title="SWIPE" onPress={() => {
                                navigation.navigate('navigation')
                            }}/>
                        </View> 
                    </View>
            )
        })
        
        return (
            <ScrollView style={styles.scrollScreen}>
                    {[usersGroups]}
                    {/* {usersMembers} */}

                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        marginTop: 150
                    }}>
                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            closeOnDragDown={true}
                            closeOnPressMask={true}
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
                            <Text style={style.centered_title}>Group Options</Text>
                            <View style={styles.drawer_grid}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('MatchHistory')}}>
                                    <Text style={style.paragraph_med_left}>Match History</Text>
                                </TouchableOpacity>
                                <View style={styles.arrow}>
                                    <Arrow />
                                </View>
                                
                            </View>
                           <View style={styles.drawer_grid}>
                                <Text style={style.paragraph_med_left}>Edit Group</Text>
                            <View style={styles.arrow}>
                                <Arrow />
                            </View>
                           </View>
                            <View style={styles.drawer_grid}>
                                <Text style={style.paragraph_med_left}>Exit Group</Text>
                                {/* <Arrow/> */}
                            <View style={styles.arrow}>
                                <Arrow />
                            </View>
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
        height: 176,
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
        justifyContent: 'space-around'
    },
    options: {
        textAlign: 'center',
        color: 'white',
        marginTop: 10
    },
    editButton: {
        width: 30, 
        height: 30, 
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 10,
        marginRight: 40
    },
    drawer_grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        height: 60
        // marginTop: 10
    },
    arrow: {
        marginTop: 20,
    }
});

export default UsersGroups;