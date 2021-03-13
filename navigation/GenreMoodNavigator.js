import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenreFilterScreen from '../screens/MovieFilters/GenreFilterScreen';
import MoodFilterScreen from '../screens/MovieFilters/MoodFilterScreen';

const Tab = createMaterialTopTabNavigator();

const GenreMoodNavigator = () => {
    return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { color: 'white' },
        // tabStyle: { width: 100 },
        style: { backgroundColor: '#121212' },
        indicatorStyle: { backgroundColor: '#f03349'}
      }}>
        <Tab.Screen name="By Genres" component={GenreFilterScreen} />
        <Tab.Screen name="By Mood" component={MoodFilterScreen} />
    </Tab.Navigator> 
    )
  }


export default GenreMoodNavigator;