import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Search from '../svgs/icons/Search';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.search_bar}>
        <TextInput 
            style={styles.input}
            placeholder={this.props.placeholder}
            placeholderTextColor='#8A8C90'
            />
        <View style={styles.icon}>
          <Search />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    search_bar: {
      width: 343,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#242424',
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      marginBottom: 20
    },
    input: {
      color: '#8A8C90',
    },
    icon: {
      marginTop: 'auto',
      marginBottom: 'auto',
    }
});