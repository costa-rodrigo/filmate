import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import MatchImage from '../../svgs/match/MatchImage';
import MainButton from '../../components/MainButton';
import style from '../../Styles';

export default class IfMatch extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      group_id: ''
    };
    const { navigate } = props.navigation;
  }

  componentDidMount() {
    return new Promise ( async (resolve, reject) => {
        try {
            let storage = await AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (error, stores) => {
                  stores.map((result, i, store) => {
                    let token = "Bearer " + store[0][1];
                    this.setState({ token: token })
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

  handleToken = async (token) => {
    await axios.get('https://filmate.ca/groups/', {
        headers: {
            'Authorization': `${token}`
        }
    })
    .then((res) => {
        const group = res.data[0].group_id
        this.setState({group_id: group});
    })
    .catch((error) => {
        console.error(error)
    })
  }

  render(){
    return (
      <View style={style.screen}>
          <MatchImage />
          <Text style={style.h1_heading}>Sit tight!</Text>
          <Text style={style.paragraph_medium}>Matching movies will appear in your group's match history after all participants finished swiping!</Text>
         <MainButton title="Show Matches" onPress={() => {
                     this.props.navigation.navigate('MatchHistory')
                 }} />
      </View>
     );
  }
}
    