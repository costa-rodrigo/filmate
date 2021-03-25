import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import InputBox from '../../components/InputBox';
import MainButton from '../../components/MainButton';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileImageLarge from '../../svgs/icons/ProfileImageLarge';
import axios from 'axios';
import style from '../../Styles';

class EditProfile extends React.Component {
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
        await axios.get('http://192.168.0.20:3000/user',  {
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

    return (
        <View style={style.screen}>
             <ScrollView>
                <View style={{marginLeft: 'auto', marginRight: 'auto', marginVertical: 20}}>
                    <ProfileImageLarge />
                </View>  
                <View>
                    <Text style={{fontFamily: 'Nunito-Bold', fontSize: 12,color: '#434A55', textAlign: 'center', marginBottom: 10}}>Change profile picture</Text>
                </View>
                <Text style={style.bold_small_grey}>Name and surname</Text>
                <InputBox title={this.state.userName}/>
                <Text style={style.bold_small_grey}>Email</Text>
                <InputBox title={this.state.userEmail}/>
                <Text style={style.bold_small_grey}>Current password</Text>
                <InputBox title="**************"/>
                <Text style={style.bold_small_grey}>New password</Text>
                <InputBox title="Type new password"/>
            </ScrollView>
            <MainButton title="Make changes"/>
        </View> 
    )
}   
}

export default EditProfile;