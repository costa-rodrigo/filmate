import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MainButton from '../../components/MainButton';
import { Alert } from 'react-native';
import style from '../../Styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class GenreFilterScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      moviePosters: [],
      genres: [],
      genreArray: [],
      genrePressed: false,
      genreId: '',
      allData: ''
    };

    this.populateSelectedGenres = this.populateSelectedGenres.bind(this);
  }
  
  componentDidMount() {
    axios.get(`http://192.168.0.20:8080/genres`)
    // axios.get(`http://localhost:8080/genres`)
    .then(res => {
      const genres = res.data
      this.setState({ genres })

      let genreArray = [];
      
      for (let i = 0; i < genres.length; i++) {
        let genre = [(genres[i].name), (genres[i].id)];
        genreArray.push(genre);        
        this.setState({ genreArray });
      }
    })
  }

populateSelectedGenres = () => {
  // axios.get(`http://localhost:8080/movies`)
  axios.get(`http://192.168.0.20:8080/movies`)
  .then(res => {
    // console.log(res.data)
    let movies = res.data

    let moviePosters = [];
    let allData = [];
  
    for (let i = 0; i < movies.length; i++) {
      let poster = movies[i].poster_path;
     
      moviePosters.push(poster)
      this.setState({ moviePosters })
    }

    for (let i = 0; i < movies.length; i++) {
      let data = [movies[i].title, movies[i].overview, movies[i].vote_average, movies[i].release_date]
      allData.push(data)    
      this.setState({ allData })
    }
  })
}

handleSubmit(genreId, posters, allData) {
  if (!genreId) {
    Alert.alert("Please select a genre.")
  } else {
      // axios.post(`http://localhost:8080/movies`, genreId)
  axios.post(`http://192.168.0.20:8080/movies`, genreId)
  .then(res => {
    this.setState({genreId})
    const { navigate } = this.props.navigation;
    this.props.navigation.navigate('ShowMovies', { genreId: genreId, posters: posters, allData: allData})
  })
  }
}

genrePressed = (genre) => {
  let genrePressed = true;
  this.setState({genrePressed})
  let genreId = [genre[1]];
  this.setState({ genreId })

  // axios.post(`http://localhost:8080/movies`, genreId)
  axios.post(`http://192.168.0.20:8080/movies`, genreId)
  .then(res => {
    this.populateSelectedGenres()
  })
}

render() {

  const posters = this.state.moviePosters.map((poster, index) => {
    return (
      <Image key={poster} source={{uri: poster}} alt='movie poster'
      style={{  maxWidth: 400, height: '85%', borderRadius: 25 }}
      />
    )
  })

  const genres = this.state.genreArray.map((genre, index) => {
    console.log(genre[1])
    return (
      <View key={genre[1]}>
        <TouchableOpacity
            style={this.state.genreId.includes(genre[1])
              ? {
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                margin: 5,
                backgroundColor: '#f03349',
              }
              : {
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                margin: 5,
                backgroundColor: '#242424',
              }
            }
            onPress={() => this.genrePressed(genre)}>
            <Text style={style.bold_medium}>{genre[0]}</Text>
        </TouchableOpacity>
      </View>
    )
  })

  const allData = this.state;
  const genreId = this.state.genreId;
  
  return (
    <View style={style.screen}>
      <ScrollView>
        <View style={styles.genre}>
          <Text>{genres}</Text>
        </View>
       
      </ScrollView>
      <MainButton 
          title="Next" 
          onPress={() => this.handleSubmit(genreId, posters, allData )}/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  genre: {
    width: '100%',
    marginTop: 20
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5
  },
  buttonText: {
    color: 'white'
  }
});