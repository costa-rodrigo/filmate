import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default class NewGroupFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            platformArray: ['netflix', 'prime', 'crave', 'hulu', 'hbo', 'disney plus']
        }

    }
   
    platformPressed = (platform) => {
        // let platformPressed = true;
        let platformName = platform;
        console.log('platform', platformName)
        this.setState({ platformName })
    }

  render() {
      const platforms = this.state.platformArray.map((platform, index) => {
          return (
            <View>
              <TouchableOpacity 
                  key={platform}
                  style={styles.platformButton} 
                  onPress={() => this.platformPressed(platform)}>
                  <Text style={styles.buttonText}>{platform}</Text>
              </TouchableOpacity>
          </View>
          )
      })

      const platformName = this.state.platformName;
    return (
     <View style={styles.screen}>
         <Text style={styles.title}>Filter streaming platform for the group</Text>
            <Text>{platforms}</Text>
            <Button 
                title="Filter"
                onPress={() => {
                    this.props.navigation.navigate('NewGroupName')
                }} /> 
                <Text>Chosen Platform: {platformName}</Text>
     </View>
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
      platformButton: {
        minWidth: 175,
        maxWidth: 200,
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