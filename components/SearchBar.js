import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      // <SearchBar
      //   style={styles.search}
      //   fontColor="#c6c6c6"
      //   placeholder={this.props.search}
      //   onChangeText={this.updateSearch}
      //   value={search}
      // />
      <View>
        <TextInput 
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="white"
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
      width: 343,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#242424',
      color: 'white'
    }
});