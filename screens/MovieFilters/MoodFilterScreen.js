import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Netflix from '../../svgs/Netflix';
import Happy from '../../svgs/moods/Happy';
import DateNight from '../../svgs/moods/DateNight';
import Adrenaline from '../../svgs/moods/Adrenaline';
import Artsy from '../../svgs/moods/Artsy';
import HighTech from '../../svgs/moods/HighTech';
import Inspiring from '../../svgs/moods/Inspiring';
import Kids from '../../svgs/moods/Kids';
import Curious from '../../svgs/moods/Curious';

export default class MoodFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moodArray: ['Happy', 'Date Night', 'Adrenaline Rush', 'Artsy', 'Hi Tech', 'Inspiring', 'For The Kids', 'Curious Mysteries']
        }

    }
   
    moodPressed = (mood) => {
        // let platformPressed = true;
        let moodName = mood;
        console.log('mood', moodName)
        this.setState({ moodName })
    }

  render() {
      const moods = this.state.moodArray.map((mood, index) => {
          return (
            <View>
            <TouchableOpacity
                key={mood} 
                style={styles.moodButton} 
                onPress={() => this.moodPressed(mood)}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.buttonText}>{mood}</Text>
                  <Happy />
                </View>
              
                
            </TouchableOpacity>
          </View>
          )
      })

      const moodName = this.state.moodName;
    return (
     <ScrollView style={styles.screen}>
       {/* <Adrenaline />
       <DateNight /> */}
       {/* <HighTech />
       <Artsy /> */}
       {/* <Inspiring />
       <Kids /> */}
       {/* <Curious /> */}
        <Text key={moodName}>{moods}</Text>
         <Button 
            title="Next"
            onPress={() => {
                this.props.navigation.navigate('')
            }} /> 
            <Text>Chosen Mood: {moodName}</Text>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    screen: {
        // paddingHorizontal: 20,
        paddingTop: 50
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 60
    },
    text:{
        color:'black',
        },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      moodButton: {
        width: 200,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 60,
        margin: 5
      },
      container: {
        flexDirection: 'row'
       
    }

});