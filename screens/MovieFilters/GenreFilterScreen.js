import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MainButton from '../../components/MainButton';
import { Alert } from 'react-native';

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
      allData: ''
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
    let allData = [];
    // let movieOverview = [];

    for (let i = 0; i < movies.length; i++) {
      // index++;
      let poster = movies[i].poster_path;
      // console.log(poster)
      moviePosters.push(poster)
      this.setState({ moviePosters })
      // console.log(moviePosters)
      
      // let everythingObject = {
      //   title: movies[i].title, overview: movies[i].overview
      // }
      // console.log("everythingObj: ", everythingObject)
      // this.setState({ allData: everythingObject })
      let title = movies[i].title;
      // console.log(title)
      movieTitles.push(title)
      this.setState({ movieTitles })

      let overview = movies[i].overview;
      movieOverview.push(overview);
      this.setState({ movieOverview })
      // console.log(movieOverview)

      // let vote_average = movies[i].vote_average;

    }

    for (let i = 0; i < movies.length; i++) {
      let data = [movies[i].title, movies[i].overview, movies[i].vote_average]
      allData.push(data)
    //   let everythingObject = 
    //   {
    //     title: movies[i].title, overview: movies[i].overview
    //   }
    
    //   allData.push(everythingObject)
      
      this.setState({ allData })
      console.log(this.state.allData)

    }
    // console.log("everythingObj: ", this.state.allData[1].title)
    // console.log("everythingObj: ", this.state.allData[1].overview)
    // console.log("index 1: ", this.state.allData[1][0].title)
    // console.log("arrayofarray: ", this.state.allData)
  })
}

handleSubmit(genreId, posters, titles, everything, allData) {
  if (!genreId) {
    Alert.alert("please select a genre")
  } else {
      // axios.post(`http://localhost:8080/movies`, genreId)
  axios.post(`http://192.168.0.20:8080/movies`, genreId)
  .then(res => {
    this.setState({genreId})
    // this.populateSelectedGenres()
    console.log("id from handleSubmit: ", genreId)
    // console.log("posters:", posters.uri)
    const { navigate } = this.props.navigation;
    this.props.navigation.navigate('ShowMovies', { genreId: genreId, posters: posters, titles: titles, everything: everything, allData: allData})

    
  })

  }

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
  console.log("genreid", genreId)

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
      <Image key={poster}source={{uri: poster}} alt='movie'
      style={{  maxWidth: 400, height: '85%', borderRadius: 25 }}/>
    )
  })
  const titles = this.state.movieTitles.map((title, index) => {
    return (
      <Text key={title}>{title}</Text>
    )
  })

  const overviews = this.state.movieOverview.map((overview, index) => {
    return (
      <Text key={overview}>{overview}</Text>
    )
  })

  var a = [1,2,3]
  var b = ['a', 'b', 'c']
  
  let details = titles.map(function(e, i) {
    return [e, overviews[i]];
  });

  const everything = details.map((every, index) => {
    return (
      <View key={every}>
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
            key={genre}
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
            
            // style={styles.filterButton} 
            // style={{backgroundColor: this.state.backgroundColor, padding: 15}}
            // backgroundColor={this.state.BackgroundColor}
            onPress={() => this.genrePressed(genre)}>
            <Text style={styles.buttonText}>{genre[0]}</Text>
        </TouchableOpacity>
      </View>
    )
  })

  const allData = this.state;
  const genreId = this.state.genreId;
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.genre}>
          <Text>{genres}</Text>
          
          {/* <Text>{titles}</Text> */}
          {/* <Text>{overviews}</Text> */}
          {/* <Text>{everything}</Text> */}
        </View>
        <MainButton title="Next" onPress={() => this.handleSubmit(genreId, posters, titles, everything, allData)}/>
        {/* <Button title="Next" onPress={() => this.handleSubmit(genreId, posters, titles, everything)}/> */}
        {/* <Text style={styles.color}>genre:{genreId}</Text> */}
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    width: '100%',
    marginTop: 20
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
    fontSize: 20,
    color: 'white'
  }
});