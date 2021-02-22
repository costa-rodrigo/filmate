import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, ActionSheetIOS, TouchableHighlight, TouchableOpacity } from 'react-native';
// import GenreFilter from './components/GenreFilter';
// import MovieSelection from './components/MovieSlections';


// https://snack.expo.io/@shrutigarg/touchableopacity-background-change-onclick

import axios from 'axios';
export default class GenreFilterScreen extends React.Component {
  state = {
    moviePosters: [],
    genres: [],
    genreArray: [],
    genrePressed: false,
    // values: [],
    genreId: '',
    buttonColor: 'white',
    backgroundColor: 'pink'
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/genres`)
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

handleSubmit() {
  console.log('submit handled!')
}

populateMovies = (genreId) => {
  axios.get(`http://localhost:8080/movies`)
  .then(res => {
    const moviePosters = res.data;
    this.setState({ moviePosters })
  })
}

populateSelectedGenres = () => {
  axios.get(`http://localhost:8080/movies`)
  .then(res => {
    const moviePosters = res.data;
    this.setState({ moviePosters })
    // console.log(moviePosters)
    // console.log('populate genre movies working')
  })
}

genrePressed = (genre) => {
  // get the value of button when clicked Eg. Action
  // console.log("genre: ", genre[0] + " genre id: ", genre[1]);
//   this.setState({ buttonColor: 'pink', color: 'white' })
  let genrePressed = true;
  this.setState({genrePressed})

//   if(genrePressed == true) {
//       this.setState ({ pressed: true, backgroundColor: 'pink'})
//       console.log(genrePressed)
//   } else {
//       this.setState ({ pressed: false, backgroundColor: 'yellow'})
//       console.log('else')
//   }

  let genreId = [genre[1]];
  console.log('genre id:',genreId)
  this.setState({ genreId })

  axios.post(`http://localhost:8080/movies`, genreId)
  .then(res => {
    // console.log('post request working!')
    this.populateSelectedGenres()
    
  })
}


render() {
  const posters = this.state.moviePosters.map((poster) => {
    return (
      <Image source={{uri: poster}} alt='movie'
      style={{width: 400, height: 400}}/>
    )
  })
  const genres = this.state.genreArray.map((genre, index) => {
    return (
      <View>
        <TouchableOpacity 
            style={styles.filterButton} 
            backgroundColor={this.state.BackgroundColor}
            onPress={() => this.genrePressed(genre)}
            >
         
            <Text style={styles.buttonText}>{genre[0]}</Text>
          
        </TouchableOpacity>
      </View>
    )
  })

  const genreId = this.state.genreId;

  // const genreId = this.state.genre_id.map((genre, index) => {
  //   return (
  //     <View>
  //       <Text>{genreId}</Text>
  //     </View>
  //   )
  // })

  

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <GenreFilter /> */}
        {/* <MovieSelection /> */}
        <Text>Filmate</Text>
        <View style={styles.genre}>
          <Text>{genres}</Text>
        </View>
        <Button title="Submit" onPress={this.handleSubmit}/>
        <Text style={styles.color}>genre:{genreId}</Text>
        <View>{posters}</View>
        
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
    // marginTop: 50
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
