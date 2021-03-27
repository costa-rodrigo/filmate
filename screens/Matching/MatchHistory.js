// import React from 'react';
// import { View, Text } from 'react-native';
// import MainButton from '../../components/MainButton';
// import style from '../../Styles';

// const MatchHistory = props => {
//      const { navigate } = props.navigation;

//     return (
//      <View style={style.screen}>
        
//          <Text style={style.left_title}>movie title</Text>
//          <Text style={style.caption}>imdb rating</Text>
//          <Text style={style.paragraph_small}>mark as watched</Text>
//         <MainButton title="Back to home" onPress={() => {
//                     props.navigation.navigate('GroupScreen')
//                 }} />
//      </View>
//     );
//   }

// export default MatchHistory;


import React from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import MatchImage from '../../svgs/match/MatchImage';
import MainButton from '../../components/MainButton';
import style from '../../Styles';
import IfNoMatch from '../Matching/IfNoMatch';

export default class MatchHistory extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      group_id: '',
      movieMatch: '',
      responseStatus: ''
    };
    const { navigate } = props.navigation;
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
    await axios.get('http://192.168.0.20:3000/groups',  {
        headers: {
            'Authorization': `${token}`
        }
    })
    .then((res) => {
        // console.log("SITTIGHT", res.data[0].group_id)
        // currently only accepting one group (eg. getting the id at index 0 NEED TO FIX)
        const group = res.data[0].group_id
        this.setState({group_id: group});
        console.log(this.state.group_id)
        this.handleMatch()
        // this.handleVote(token)
    })
    .catch((error) => {
        console.error(error)
    })
  }

  handleMatch = async () => {
    console.log("group_id", this.state.group_id)
      //  check for a movie match
        await axios.post('http://192.168.0.20:3000/match', {
            group_id: this.state.group_id
        })
        .then((res) => {
            console.log("res data", res.status)
            this.setState({responseStatus: res.status})
            let matches = res.data;
            let matchesArray = matches.split(', ');
            console.log(matchesArray)
            this.setState({movieMatch: matchesArray})
            console.log(this.state.movieMatch)
            // var randomMatch = matchesArray[Math.floor(Math.random()*matchesArray.length)];
            // console.log("random match", randomMatch);
            // this.setState({movieMatch: randomMatch});
            // console.log(this.state.movieMatch)
// var nameArr = names.split(',');
// console.log(nameArr);
            // console.log("/match endpoint")
  
        })
        .catch((error) => {
            console.error(error)
        })
    }
// }

  render() {
    let movieMatch = this.state.movieMatch;
    let responseStatus = this.state.responseStatus;
    return (
      <View style={style.screen}>
              {responseStatus === 200
                    ? (
                      <View style={style.screen}>
                        
                          <View style={{marginLeft: '5%'}}>
                            <Image source={{uri: movieMatch[0]}} alt='movie poster'
                                style={{  maxWidth: 350, height: '75%', borderRadius: 25, marginTop: 15 }} />
                          </View>
                       
                        <MainButton title="Back Home" onPress={() => {
                          this.props.navigation.navigate('GroupScreen')
                        }} />

                     </View>
                    )
                    : (
                      <IfNoMatch />
                    )
                }

      </View>
     );
    
  }
}
    
