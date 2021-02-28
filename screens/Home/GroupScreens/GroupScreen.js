import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import SearchBar from '../../../components/SearchBar';


const GroupScreen = props => {

    const { navigate } = props.navigation;

   
    // const { otherParam } = route.params;
    
    const onLogout = () => {
        console.log('logged out')

    }

    return (
        <View style={styles.screen}>
            {/* <Text>otherParam: {otherParam}</Text> */}
            <SearchBar style={styles.search} search="Search Groups"/>
            <View style={styles.user_info}>
                <Image style={styles.image} source={require('../../Onboarding/images/moodImage.jpg')} />
                <Text>Kristen</Text>
            </View>
            <View style={styles.button}>
            <Button  title="View profile" onPress={() => {
                    props.navigation.navigate('ProfileScreen')
                }} />

            </View>
           
        <View style={styles.newGroup}>
            <Text style={styles.title}>Your groups will appear here!</Text>
            <Text style={styles.description}>Start by inviting your friends and adding new groups</Text>
            <Button 
                title="New Group"
                onPress={() => {
                    props.navigation.navigate('NewGroupFilter')
                }}
            />
            <Button title="start session" onPress={() => {
                props.navigation.navigate('navigation')
            }}/>
            {/* <Button title="start session" onPress={() => {
                props.navigation.navigate('GenreMoodNav')
            }}/> */}

            {/* <Button title="Profile" onPress={() => {
                    props.navigation.navigate('ProfileScreen')
                }} /> */}
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    }
});

export default GroupScreen;