import React from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Happy from '../../svgs/moods/Happy';
import HappyDark from '../../svgs/moods/HappyDark';
import DateNight from '../../svgs/moods/DateNight';
import DateNightDark from '../../svgs/moods/DateNightDark';
import Adrenaline from '../../svgs/moods/Adrenaline';
import AdrenalineDark from '../../svgs/moods/AdrenalineDark';
import Artsy from '../../svgs/moods/Artsy';
import ArtsyDark from '../../svgs/moods/ArtsyDark';
import HighTech from '../../svgs/moods/HighTech';
import HighTechDark from '../../svgs/moods/HighTechDark';
import Inspiring from '../../svgs/moods/Inspiring';
import InspiringDark from '../../svgs/moods/InspiringDark';
import Kids from '../../svgs/moods/Kids';
import KidsDark from '../../svgs/moods/KidsDark';
import Curious from '../../svgs/moods/Curious';
import CuriousDark from '../../svgs/moods/CuriousDark';
import axios from 'axios';
import MainButton from '../../components/MainButton';
import style from '../../Styles';

export default class MoodFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          moodArray: [ 
            ['Happy', 'happy', <Happy />, <HappyDark />], 
            ['Date Night', 'dateNight', <DateNight />, <DateNightDark />], 
            ['Adrenaline Rush', 'adrenalineRush', <Adrenaline />, <AdrenalineDark />], 
            ['Artsy', 'artsy', <Artsy />, <ArtsyDark />], 
            ['Hi Tech', 'hiTech', <HighTech />, <HighTechDark />], 
            ['Inspiring', 'inspiring', <Inspiring />, <InspiringDark />], 
            ['For The Kids', 'forTheKids', <Kids />, <KidsDark />], 
            ['Curious Mysteries', 'curiousMysteries', <Curious />, <CuriousDark />]
          ],
            moodBoxPressed: false,
            moodName: '',
            allData: '',
            moviePosters: []
        }
    }
   
  moodPressed = (mood) => {
        let moodBoxPressed = true;
        this.setState({moodBoxPressed});
        let moodName = [mood[1]];
        this.setState({ moodName })
        
        axios.post(`https://filmate.ca/mood/`, moodName)
        .then(res => {
          let movies = res.data
          let moviePosters = [];
          let allData = [];
        
          for (let i = 0; i < movies.length; i++) {
            let poster = movies[i].poster_path;
            moviePosters.push(poster)
            this.setState({ moviePosters })
          }
      
          for (let i = 0; i < movies.length; i++) {
            let data = [movies[i].title, movies[i].overview, movies[i].vote_average, movies[i].release_date, movies[i].id]
            allData.push(data)    
            this.setState({ allData })
          }
        })
    }

    handleSubmit(moodName, posters, allData) {
      if (!moodName) {
        Alert.alert("Please select a mood.")
      } else {
        this.props.navigation.navigate('ShowMovies', { genreId: moodName, posters: posters, allData: allData})
      }
    }
    
  render() {
    const posters = this.state.moviePosters.map((poster, index) => {
      return (
        <Image key={index} source={{uri: poster}} alt='movie poster'
        style={{  maxWidth: 400, height: '85%', borderRadius: 25 }}
        />
      )
    })

      const moods = this.state.moodArray.map((mood, index) => {
          return (
            <View key={mood[0]} >
            <TouchableOpacity
                style={this.state.moodName.includes(mood[1])
                ? {
                  width: 168,
                  height: 128,
                  borderRadius: 20,
                  paddingHorizontal: 30,
                  margin: 5,
                  backgroundColor: '#f03349'
                }
                : {
                  width: 168,
                  height: 128,
                  borderRadius: 20,
                  paddingHorizontal: 30,
                  margin: 5,
                  backgroundColor: '#242424'
                }
              }
                onPress={() => this.moodPressed(mood)}>
                <View>
                  {
                    this.state.moodName.includes(mood[1])
                    ? (
                      <View style={styles.svg}>{mood[3]}</View>
                    )
                    : (
                      <View style={styles.svg}>{mood[2]}</View>
                    )
                  }
                  <View style={{marginTop: 10}}>
                    <Text style={style.bold_medium}>{mood[0]}</Text>
                  </View>
                </View>
            </TouchableOpacity>
          </View>
          )
      })

    const allData = this.state;
    const moodName = this.state.moodName;
    return (
    <View style={style.screen}>
       <ScrollView>
        <View>
          <Text style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>{moods}</Text>
        </View>           
     </ScrollView>
     <MainButton 
            title="Next"
            onPress={() => this.handleSubmit(moodName, posters, allData )}/>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
    svg: {
      paddingTop: 10,
      paddingLeft: 60
    }
});