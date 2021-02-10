import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default class NewGroupFilter extends React.Component {
    state = {
        // borderColor: 'black',
        // borderColor2: 'black',
        // borderWidth: 2,
        pressed: true
    };


    // false means its been pressed
    onDisneyPress() {
        console.log('button was pressed!:', this.state.press);
        if (this.state.pressed == false) {
            this.setState({ pressed: true, borderColor1: 'black', borderColor2: 'red'})
            console.log('disney if', this.state.pressed, 'color changed to: ', this.state.borderColor1)
            // console.log(this.state.borderColor1)
            // console.log(this.state.pressed)
        }
        else {
            this.setState({ pressed: false, borderColor1: 'red', borderColor2: 'black'})
            console.log('disney else', this.state.pressed)
        }
        console.log('disney if', this.state.pressed)
    }

    onNetflixPress() {
        if (this.state.pressed == false) {
            this.setState({ pressed: true, borderColor3: 'black', borderColor4: 'red'})
        } else {
            this.setState({ pressed: false, borderColor3: 'red', borderColor4: 'black'})
        }
    }

    onAmazonPress() {
        if (this.state.pressed == false) {
            this.setState({ pressed: true, borderColor5: 'black', borderColor6: 'red'})
        } else {
            this.setState({ pressed: false, borderColor5: 'red', borderColor6: 'black'})
        }
    }

  render() {
    return (
     <View style={styles.screen}>
         <Text style={styles.title}>Filter streaming platform for the group</Text>

         <View style={styles.container}>
          <TouchableOpacity
              style={{borderColor:this.state.borderColor2, borderWidth: 2, padding: 15}}
              onPress={()=>this.onDisneyPress()}
                >
            <Text style={styles.text}>Disney Plus</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderColor:this.state.borderColor4, borderWidth: 2, padding: 15}}
              onPress={()=>this.onNetflixPress()}
                >
            <Text style={styles.text}>Netflix</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={{borderColor:this.state.borderColor6, borderWidth: 2, padding: 15}}
              onPress={()=>this.onAmazonPress()}
                >
            <Text style={styles.text}>Amazon</Text>
          </TouchableOpacity>
      </View>

         <Button 
            title="Filter"
            onPress={() => {
                this.props.navigation.navigate('NewGroupName')
            }} /> 
     </View>
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
        // borderColor: 'black',
        // borderWidth: 1,
        // borderRadius: 10
        },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    // container: {
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     alignItems: 'flex-start', // if you want to fill rows left to right,
    // },
    // item: {
    //     width: '50%'
    // }
    container: {
        flexDirection: 'row'
       
    }

});