import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlatformSelection from './PlatformSelection';

export default class NewGroupFilter extends React.Component {

  render() {
    return (
     <View style={styles.screen}>
         <Text style={styles.title}>Filter streaming platform for the group</Text>
         <View style={styles.container}>
             <View style={styles.column1}>
                 <PlatformSelection />
                 <PlatformSelection />
                 <PlatformSelection />
             </View>
             <View style={styles.column2}>
                <PlatformSelection/>
                <PlatformSelection />
                <PlatformSelection />
             </View>
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