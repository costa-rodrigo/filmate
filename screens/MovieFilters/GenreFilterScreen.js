// import React from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
// // import GenreFilter from './components/GenreFilter';
// // import MovieSelection from './components/MovieSlections';
// // https://snack.expo.io/@shrutigarg/touchableopacity-background-change-onclick

// import axios from 'axios';

// const SCREEN_HEIGHT = Dimensions.get('window').height;
// const SCREEN_WIDTH = Dimensions.get('window').width;

// export default class GenreFilterScreen extends React.Component {  
//   constructor(props) {
//     super(props);
//     this.state = {
//       moviePosters: [],
//       genres: [],
//       genreArray: [],
//       genrePressed: false,
//       // values: [],
//       genreId: ''
//     };
//     this.populateSelectedGenres = this.populateSelectedGenres.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     // this.onSubmitForm = this.onSubmitForm.bind(this);
//   }

//   // state = {
//   //   moviePosters: [],
//   //   genres: [],
//   //   genreArray: [],
//   //   genrePressed: false,
//   //   // values: [],
//   //   genreId: '',
//   //   buttonColor: 'white',
//   //   backgroundColor: 'pink'
//   // }
  
//   componentDidMount() {
//     axios.get(`http://192.168.0.20:8080/genres`)
//     // axios.get(`http://localhost:8080/genres`)
//     .then(res => {
//       const genres = res.data
//       this.setState({ genres })
//       // console.log(genres[0].id)

//       let genreArray = [];
//       let index = 0;
      
//       for (let i = 0; i < genres.length; i++) {
//         index++;
//         let genre = [(genres[i].name), (genres[i].id)];
//         // let genre_id = (genres[i].id)
//         genreArray.push(genre);        
//         this.setState({ genreArray });
//       }
//     })
//   }

// populateSelectedGenres = () => {
//   axios.get(`http://192.168.0.20:8080/movies`)
//   // axios.get(`http://localhost:8080/movies`)
//   .then(res => {
//     const moviePosters = res.data;
//     this.setState({ moviePosters })
//   })
// }

// handleSubmit(genreId, posters) {
//   axios.get(`http://192.168.0.20:8080/movies`, genreId)
//   // axios.post(`http://localhost:8080/movies`, genreId)
//   .then(res => {
//     this.setState({genreId})
//     // this.populateSelectedGenres()
//     console.log("id from handleSubmit: ", genreId)
//     console.log("posters:", posters)
//     const { navigate } = this.props.navigation;
//     this.props.navigation.navigate('ShowMovies', { genreId: genreId, posters: posters})
//   })
// }

// genrePressed = (genre) => {
//   let genrePressed = true;
//   this.setState({genrePressed})
//   let genreId = [genre[1]];
//   console.log('genre id:',genreId)
//   this.setState({ genreId })

//   axios.get(`http://192.168.0.20:8080/movies`, genreId)
//   // axios.post(`http://localhost:8080/movies`, genreId)
//   .then(res => {
//     // console.log('post request working!')
//     this.populateSelectedGenres()
    
//   })
// }


// render() {
//   const posters = this.state.moviePosters.map((poster, index) => {
//     return (
//       <Image key={index} source={{uri: poster}} alt='movie'
//       style={{  width: 400, height: 800, resizeMode: 'cover', borderRadius: 25 }}/>
//       // <Image key={index} source={{uri: poster}} alt='movie poster'
//       // style={{  flex: 1, width: 400, height: 600, resizeMode: 'cover', borderRadius: 25, position: 'absolute' }}/>
//     )
//   })
//   // console.log("posters, ", posters);
//   const genres = this.state.genreArray.map((genre, index) => {
//     return (
//       <View>
//         <TouchableOpacity 
//             style={styles.filterButton} 
//             backgroundColor={this.state.BackgroundColor}
//             onPress={() => this.genrePressed(genre)}>
//             <Text style={styles.buttonText}>{genre[0]}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   })

//   const genreId = this.state.genreId;

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text>Filmate</Text>
//         <View style={styles.genre}>
//           <Text>{genres}</Text>
//         </View>
//         {/* <Button title="Next" onPress={this.handleSubmit}/> */}
//         <Button title="Next" onPress={() => this.handleSubmit(genreId, posters)}/>

//         <Text style={styles.color}>genre:{genreId}</Text>
//         {/* <View>{posters}</View> */}
//       </ScrollView>
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: 50
//   },
//   genre: {
//     width: '100%'
//   },
//   text: {
//     fontSize: 20
//   },
//   filterButton: {
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     margin: 5
//   },
//   buttonText: {
//     fontSize: 20
//   }
// });

// TRYING OLD CODE HERE


import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
// import GenreFilter from './components/GenreFilter';
// import MovieSelection from './components/MovieSlections';
// https://snack.expo.io/@shrutigarg/touchableopacity-background-change-onclick

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
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  // state = {
  //   moviePosters: [],
  //   genres: [],
  //   genreArray: [],
  //   genrePressed: false,
  //   // values: [],
  //   genreId: '',
  //   buttonColor: 'white',
  //   backgroundColor: 'pink'
  // }
  
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
    console.log("posters:", posters)
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
    // console.log('post request working!')
    this.populateSelectedGenres()
    
  })
}


render() {
  const posters = this.state.moviePosters.map((poster, index) => {
    return (
      <Image key={index} source={{uri: poster}} alt='movie'
      style={{  width: 400, height: 800, resizeMode: 'cover', borderRadius: 25 }}/>
      // <Image key={index} source={{uri: poster}} alt='movie poster'
      // style={{  flex: 1, width: 400, height: 600, resizeMode: 'cover', borderRadius: 25, position: 'absolute' }}/>
    )
  })
  console.log("posters, ", posters);
  const genres = this.state.genreArray.map((genre, index) => {
    return (
      <View>
        <TouchableOpacity 
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
        <Text>Filmate</Text>
        <View style={styles.genre}>
          <Text>{genres}</Text>
        </View>
        {/* <Button title="Next" onPress={this.handleSubmit}/> */}
        <Button title="Next" onPress={() => this.handleSubmit(genreId, posters)}/>

        <Text style={styles.color}>genre:{genreId}</Text>
        {/* <View>{posters}</View> */}
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