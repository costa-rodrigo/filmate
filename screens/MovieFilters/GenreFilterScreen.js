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
      movieTitles: [],
      movieOverview: [],
      genres: [],
      genreArray: [],
      genrePressed: false,
      // values: [],
      genreId: '',
      backgroundColor: 'black',
      backgroundColor2: 'black',
      // pressed: false
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
      // let index = 0;
      
      for (let i = 0; i < genres.length; i++) {
        // index++;
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
    console.log(res.data)
    let movies = res.data

    let moviePosters = [];
    let movieTitles = [];
    let movieOverview = [];
    // let movieOverview = [];

    for (let i = 0; i < movies.length; i++) {
      // index++;
      let poster = movies[i].poster_path;
      // console.log(poster)
      moviePosters.push(poster)
      this.setState({ moviePosters })
      console.log(moviePosters)
      
      let title = movies[i].title;
      // console.log(title)
      movieTitles.push(title)
      this.setState({ movieTitles })

      let overview = movies[i].overview;
      movieOverview.push(overview);
      this.setState({ movieOverview })
      console.log(movieOverview)
    }
  })
}

handleSubmit(genreId, posters, titles, everything) {
  // axios.post(`http://localhost:8080/movies`, genreId)
  axios.post(`http://192.168.0.20:8080/movies`, genreId)
  .then(res => {
    this.setState({genreId})
    // this.populateSelectedGenres()
    console.log("id from handleSubmit: ", genreId)
    // console.log("posters:", posters.uri)
    const { navigate } = this.props.navigation;
    this.props.navigation.navigate('ShowMovies', { genreId: genreId, posters: posters, titles: titles, everything: everything})

    
  })
}

genrePressed = (genre) => {
  let genrePressed = true;
  this.setState({genrePressed})
  // if(!this.state.genrePressed) {
  //   this.setState({ genrePressed: true, backgroundColor: 'red'});
  // } else {
  //   this.setState({ genrePressed: false, backgroundColor: 'black', backgroundColor2: 'red'})
  // }

  let genreId = [genre[1]];
  console.log('genre id:',genreId)
  this.setState({ genreId })

  // axios.post(`http://localhost:8080/movies`, genreId)
  axios.post(`http://192.168.0.20:8080/movies`, genreId)
  .then(res => {
    // console.log(res.data)
    this.populateSelectedGenres()
  })
}


render() {
  
  const movieTitles = this.state.movieTitles;
  // console.log(movieTitles)
  const movieOverview = this.state.movieOverview;
  // console.log(movieOverview)
  const posters = this.state.moviePosters.map((poster, index) => {
    return (
      <Image key={index + "i"}source={{uri: poster}} alt='movie'
      style={{  maxWidth: 400, height: '95%', borderRadius: 25 }}/>
    )
  })
  const titles = this.state.movieTitles.map((title, index) => {
    return (
      <Text key={index}>{title}</Text>
    )
  })

  const overviews = this.state.movieOverview.map((overview, index) => {
    return (
      <Text key={index}>{overview}</Text>
    )
  })

  var a = [1,2,3]
  var b = ['a', 'b', 'c']
  
  let details = titles.map(function(e, i) {
    return [e, overviews[i]];
  });

  const everything = details.map((every, index) => {
    return (
      <View>
         {/* <Text key={index}>Title: {every[0]}</Text> */}
         <Text>{every}</Text>
         {/* <Text>Overview: {every[1]}</Text> */}
      </View>
    )
  })
  // console.log("everything com", everything)
  // console.log(titles)

  const genres = this.state.genreArray.map((genre, index) => {
    return (
      <View>
        <TouchableOpacity
            key={index}
            // style={styles.filterButton} 
            // style={{backgroundColor: this.state.backgroundColor, padding: 15}}
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
          
          {/* <Text>{titles}</Text> */}
          {/* <Text>{overviews}</Text> */}
          {/* <Text>{everything}</Text> */}
        </View>
        <Button title="Next" onPress={() => this.handleSubmit(genreId, posters, titles, everything)}/>
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