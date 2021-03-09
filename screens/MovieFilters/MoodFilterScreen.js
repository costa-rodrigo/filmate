import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Netflix from '../../svgs/Netflix';

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
                <Text style={styles.buttonText}>{mood}</Text>
            </TouchableOpacity>
          </View>
          )
      })

      const moodName = this.state.moodName;
    return (
     <ScrollView style={styles.screen}>
       {/* <Netflix /> */}
        <Text>{moods}</Text>
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