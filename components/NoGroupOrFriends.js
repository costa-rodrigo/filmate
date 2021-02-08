import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NoGroupOrFriends = props => {
    return (
        <View style={styles.screen}>
            {/* <SearchBar style={styles.search} search="Search Groups"/> */}
        
        <View style={styles.newGroup}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Button 
                title={props.buttonTitle}
                onPress={() => {
                    props.navigation.navigate('NewGroupFilter')
                }}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newGroup: {
        marginVertical: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        paddingVertical: 100,
        marginHorizontal: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    description: {
        textAlign: 'center',
        marginBottom: 30
    }

});

export default NoGroupOrFriends;