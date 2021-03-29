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
      // moviePosters: [],
      // genres: [],
      // genreArray: [],
      // genrePressed: false,
      // genreId: '',
      // allData: ''
      token: '',
      group_id: ''
    };
    const { navigate } = props.navigation;
    // this.populateSelectedGenres = this.populateSelectedGenres.bind(this);
  }

  componentDidMount() {
    return new Promise ( async (resolve, reject) => {
        try {
            let storage = await AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (error, stores) => {
                  stores.map((result, i, store) => {
                      console.log("store", store)
                    let token = "Bearer " + store[0][1];
                    this.setState({ token: token })
                    console.log("token from handlesubmit", token)
                    resolve(storage)
                    this.handleToken(token)
                    // this.handleVote(token)
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
    // await axios.get('http://192.168.0.20:3000/groups',  {
        headers: {
            'Authorization': `${token}`
        }
    })
    .then((res) => {
        // console.log("GROUPINFO", res)
        // console.log("SITTIGHT", res.data[0].group_id)
        // currently only accepting one group (eg. getting the id at index 0 NEED TO FIX)
        const group = res.data[0].group_id
        this.setState({group_id: group});
        console.log(this.state.group_id)
        // this.handleMatch()
        // this.handleVote(token)
    })
    .catch((error) => {
        console.error(error)
    })
  }

  // handleMatch() {
  //     //  check for a movie match
  //       // console.log("handleSwipeStart");
  //       axios.post('http://192.168.0.20:3000/match', {
  //           group_id: this.state.group_id
  //       })
  //       .then((res) => {
  //           console.log(res)
  //           console.log("/match endpoint")
  
  //       })
  //       .catch((error) => {
  //           console.error(error)
  //       })
  //   }
// }

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
    