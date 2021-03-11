import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Netflix from '../../svgs/Netflix';
import Happy from '../../svgs/moods/Happy';
import HappyDark from '../../svgs/moods/HappyDark';
import DateNight from '../../svgs/moods/DateNight';
import DateNightDark from '../../svgs/moods/DateNightDark';
import Adrenaline from '../../svgs/moods/Adrenaline';
import AdrenalineDark from '../../svgs/moods/AdrenalineDark';
import Artsy from '../../svgs/moods/Artsy';
import HighTech from '../../svgs/moods/HighTech';
import HighTechDark from '../../svgs/moods/HighTechDark';
import Inspiring from '../../svgs/moods/Inspiring';
import InspiringDark from '../../svgs/moods/InspiringDark';
import Kids from '../../svgs/moods/Kids';
import KidsDark from '../../svgs/moods/KidsDark';
import Curious from '../../svgs/moods/Curious';
import CuriousDark from '../../svgs/moods/CuriousDark';


export default class MoodFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moodArray: [ 
              ['Happy', <Happy />, <HappyDark />], 
              ['Date Night', <DateNight />, <DateNightDark />], 
              ['Adrenaline Rush', <Adrenaline />, <AdrenalineDark />], 
              ['Artsy', <Artsy />, <Artsy />], 
              // NEED ARTSY DARK
              ['Hi Tech', <HighTech />, <HighTechDark />], 
              ['Inspiring', <Inspiring />, <InspiringDark />], 
              ['For The Kids', <Kids />, <KidsDark />], 
              ['Curious Mysteries', <Curious />, <CuriousDark />]
            ],
            moodBoxPressed: false,
            moodName: ''
        }
    }
   
  moodPressed = (mood) => {
        let moodBoxPressed = true;
        this.setState({moodBoxPressed});
        console.log("moodbox: ", this.state.moodBoxPressed)

        let moodName = [mood[0]];
        console.log('mood', moodName)
        this.setState({ moodName })
    }

  render() {
      const moods = this.state.moodArray.map((mood, index) => {
          return (
            <View>
            <TouchableOpacity
                key={mood} 
                // style={styles.moodButton} 
                style={this.state.moodName.includes(mood[0])
                ? {
                  width: 180,
                  borderRadius: 20,
                  paddingHorizontal: 30,
                  paddingVertical: 60,
                  margin: 5,
                  backgroundColor: '#f03349'
                }
                : {
                  width: 180,
                  borderRadius: 20,
                  paddingHorizontal: 30,
                  paddingVertical: 60,
                  margin: 5,
                  backgroundColor: '#242424'
                }
              }
                onPress={() => this.moodPressed(mood)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.buttonText}>{mood[0]}</Text>
                  {
                    this.state.moodName.includes(mood[0])
                    ? (
                      <View>{mood[2]}</View>
                    )
                    : (
                      <View>{mood[1]}</View>
                    )
                  }
                </View>
            </TouchableOpacity>
          </View>
          )
      })

    const moodName = this.state.moodName;
    return (
     <ScrollView style={styles.screen}>
       <View>
       <Text key={moodName}>{moods}</Text>
       </View>
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
        // width: 200,
        // borderWidth: 1,
        // borderRadius: 20,
        // paddingHorizontal: 30,
        // paddingVertical: 60,
        // margin: 5
      },
    container: {
        flexDirection: 'row'
    },
    svg: {
      marginTop: 0
    },
    buttonText: {
    }
});