import React from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import MatchImage from '../../svgs/match/MatchImage';
import MainButton from '../../components/MainButton';
import style from '../../Styles';
import IfNoMatch from '../Matching/IfNoMatch';
import EmptyCircle from '../../svgs/icons/EmptyCirlce';
import Checkmark from '../../svgs/icons/Checkmark';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MatchHistory extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      group_id: '',
      movieMatch: '',
      responseStatus: '',
      buttonPressed: false,
      poster: '',
      title: '',
      rating: ''
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
            this.handleMovieInfo()
  
        })
        .catch((error) => {
            console.error(error)
        })
    }

    handlePress() {
      this.setState({ buttonPressed: !this.state.buttonPressed })
      console.log(this.state.buttonPressed)
      console.log("pressed")
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
           console.log("ADDED FRIENDS", user_email)
       }
       this.setState({ addedFriends: this.state.addedFriends })
       console.log("ADDED FRIENDS STATE", this.state.addedFriends)
  }

  handleMovieInfo() {
    console.log("movie match", this.state.movieMatch[0])
    console.log("handleMovieInfo")
    // axios.post('https://filmate.ca:8080/api/matchHistory', {
    axios.post('http://192.168.0.20:8080/matchHistory', {
      movieId: this.state.movieMatch[0]
  })
  .then((res) => {
      console.log("res data", res.data[0]);
      let backdrop = `http://image.tmdb.org/t/p/w500${res.data[0].backdrop_path}`
      this.setState({poster: backdrop});
      let title = res.data[0].title;
      this.setState({title: title});
      let rating = res.data[0].vote_average;
      this.setState({rating: rating});
  })
  .catch((error) => {
      console.error(error)
  })
  }

  render() {
    let movieMatch = this.state.movieMatch;
    let responseStatus = this.state.responseStatus;
    let poster = this.state.poster;
    let title = this.state.title;
    let rating = this.state.rating;
    return (
      <View style={style.screen}>
              {responseStatus === 200
                    ? (
                      <View style={style.screen}>
                          <View style={{width: 343, height: 280, backgroundColor: '#242424', marginLeft: 'auto', marginRight: 'auto', borderRadius: 15, marginTop: 20}}>
                          <Image source={poster ? {uri: poster} : null} alt='movie poster'
                                style={{  width: 343, height: '60%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
                            <View style={{marginLeft: 15, marginTop: 10}}>
                              <Text style={style.left_title}>{title}</Text>
                              <Text style={{ color: '#D2D5D5', marginBottom: 20, fontFamily: 'Nunito-Regular', fontSize: 12}}>⭐ IMDb {rating}/10</Text>
                              <TouchableOpacity  onPress={() => this.handlePress()}>
                                  <View>
                                  {
                                    (!this.state.buttonPressed === false)
                                    ? (
                                        <View style={{flexDirection: 'row'}}>
                                            <Checkmark />
                                            <View style={{marginLeft: 10, marginTop: 'auto', marginBottom: 'auto'}}>
                                              <Text style={style.bold_med_small}>mark as watched</Text>
                                            </View>
                                        </View>
                                    )
                                    : (
                                        <View style={{flexDirection: 'row'}}>
                                            <EmptyCircle />
                                            <View style={{marginLeft: 10, marginTop: 'auto', marginBottom: 'auto'}}>
                                            <Text style={style.bold_med_small}>mark as watched</Text>
                                            </View>
                                        </View>
                                    )
                                }
                                  </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        {/* <MainButton title="show movie info" onPress={() => this.handleMovieInfo()} /> */}
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