import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ProfileImageLarge from '../../svgs/icons/ProfileImageLarge';
import AsyncStorage from '@react-native-community/async-storage';
import EditIcon from '../../svgs/icons/EditIcon';
import Request from '../../svgs/icons/Request';
import style from '../../Styles';
import axios from 'axios';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            token: '',
            userName: '',
            userEmail: ''
        }
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
                          this.handleUsername(token)
                        });
                      });
                    });
              } catch(error) {
                  reject(new Error('Error getting storage from AsyncStorage: ' + error.message))
              }
          });
      }

      handleUsername  = async (token) => {
        await axios.get('https://filmate.ca/user/', {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            let username = res.data.name;
            let email = res.data.email;
            this.setState({userName: username})
            this.setState({userEmail: email})
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={style.screen}>
                <View>
                    <View style={{backgroundColor: '#121212'}}>
                        <View style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: 20}}>
                            <ProfileImageLarge />
                        </View>                    
                        <Text style={style.centered_title}>{this.state.userName}</Text>
                        <Text style={{fontSize: 12, color: '#d2d5d5', fontFamily: 'Nunito-Regular', textAlign: 'center', marginBottom: 20}}>{this.state.userEmail}</Text>
                    </View>
                    <View style={{marginTop: 40}}>
                        <TouchableOpacity 
                            style={styles.grid}
                            onPress={() => {
                                navigation.navigate('EditProfile')
                            }}>
                            <View style={styles.icon}>
                                <EditIcon />
                            </View>
                            <Text style={style.semi_bold_medium}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.grid}>
                            <View style={styles.icon}>
                                <Request />
                            </View>
                            <Text style={style.semi_bold_medium}>Requests</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginLeft: '25%', position: 'absolute', bottom: 25}}>
                    <Image source={require('../../assets/movieDatabase.png')} />
                </View>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        marginVertical: 15
    },
    icon: {
        marginHorizontal: 30
    }
});

export default ProfileScreen;

