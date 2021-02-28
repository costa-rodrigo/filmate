import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenreFilterScreen from '../screens/MovieFilters/GenreFilterScreen';
import MoodFilterScreen from '../screens/MovieFilters/MoodFilterScreen';

const Tab = createMaterialTopTabNavigator();

const GenreMoodNavigator = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="By Genres" component={GenreFilterScreen} />
        <Tab.Screen name="By Mood" component={MoodFilterScreen} />
    </Tab.Navigator> 
    )
  }


export default GenreMoodNavigator;