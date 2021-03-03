import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';

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
      // values: [],
      genreId: ''
    };
    this.populateSelectedGenres = this.populateSelectedGenres.bind(this);
  }
  
  componentDidMount() {
    axios.get(`http://192.168.0.20:8080/genres`)
    // axios.get(`http://localhost:8080/genres`)
    .then(res => {
      const genres = res.data
      this.setState({ genres })
      // console.log(genres[0].id)

      let genreArray = [];
      let index = 0;
      
      for (let i = 0; i < genres.length; i++) {
        index++;
        let genre = [(genres[i].name), (genres[i].id)];
        // let genre_id = (genres[i].id)
        genreArray.push(genre);        
        this.setState({ genreArray });
      }
    })
  }

populateSelectedGenres = () => {
  // axios.get(`http://localhost:8080/movies`)
  axios.get(`http://192.168.0.20:8080/movies`)
  .then(res => {
    const moviePosters = res.data;
    this.setState({ moviePosters })
  })
}

handleSubmit(genreId, posters) {
  // axios.post(`http://localhost:8080/movies`, genreId)
  axios.post(`http://192.168.0.20:8080/movies`, genreId)
  .then(res => {
    this.setState({genreId})
    // this.populateSelectedGenres()
    console.log("id from handleSubmit: ", genreId)
    // console.log("posters:", posters.uri)
    const { navigate } = this.props.navigation;
    this.props.navigation.navigate('ShowMovies', { genreId: genreId, posters: posters})

    
  })
}

genrePressed = (genre) => {
  let genrePressed = true;
  this.setState({genrePressed})
  let genreId = [genre[1]];
  console.log('genre id:',genreId)
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
      <Image key={index} source={{uri: poster}} alt='movie'
      style={{  maxWidth: 400, height: '95%', borderRadius: 25 }}/>
    )
  })
  // console.log("posters, ", posters);
  const genres = this.state.genreArray.map((genre, index) => {
    return (
      <View>
        <TouchableOpacity
            key={genre}
            style={styles.filterButton} 
            backgroundColor={this.state.BackgroundColor}
            onPress={() => this.genrePressed(genre)}>
            <Text style={styles.buttonText}>{genre[0]}</Text>
        </TouchableOpacity>
      </View>
    )
  })

  const genreId = this.state.genreId;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.genre}>
          <Text>{genres}</Text>
        </View>
        <Button title="Next" onPress={() => this.handleSubmit(genreId, posters)}/>
        <Text style={styles.color}>genre:{genreId}</Text>
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    width: '100%'
  },
  text: {
    fontSize: 20
  },
  filterButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5
  },
  buttonText: {
    fontSize: 20
  }
});