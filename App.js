import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import style from './Style';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      // Montserrat: require('./assets/fonts/Montserrat.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Montserrat-SemiBold': {
        uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-SemiBold': {
        uri: require('./assets/fonts/Nunito-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,

      }
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <Text style={style.text}>Hi</Text>
          {/* <Text style={{ fontSize: 30 }}>Default Font</Text>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>
            Montserrat-SemiBold
          </Text>
          <Text style={style.text}>
            Nunito-SemiBold
          </Text> */}
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
