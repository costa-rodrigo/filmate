import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Register/LoginScreen';
import SignupScreen from './screens/Register/SignupScreen';
import ForgotPasswordScreen from './screens/Register/ForgotPasswordScreen';
import ForgotPasswordScreen_Reset from './screens/Register/ForgotPasswordScreen_Reset';
import NewGroupFilter from './screens/Home/GroupScreens/NewGroupFilter';
import NewGroupName from './screens/Home/GroupScreens/NewGroupName';
import NewGroupAddMember from './screens/Home/GroupScreens/NewGroupAddMember';
import AddFriends from './screens/Home/FriendScreens/AddFriends';
import FriendsInvited from './screens/Home/FriendScreens/FriendsInvited';
import ProfileScreen from './screens/Profile/ProfileScreen';
import EditProfile from './screens/Profile/EditProfile';
import RequestScreen from './screens/Profile/RequestScreen';
import TellFriendScreen from './screens/Profile/TellFriendScreen';
import ShowMovies from './screens/MovieFilters/ShowMovies';
import Onboarding from './screens/Onboarding/Onboarding';
import GroupCreated from './screens/Home/GroupScreens/GroupCreated';

import GenreMoodNavigator from './navigation/GenreMoodNavigator';
import HomeNavigator from './navigation/HomeNavigator';


// https://docs.expo.io/versions/latest/sdk/splash-screen/
// ADD splash screen

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: '' }, 
                       headerTitleStyle: { fontWeight: 'bold' }}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '', headerStyle: {
          backgroundColor: '#121212', shadowRadius: 0, shadowOffset: {
            height: 0
          }
        } }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerStyle: {
          backgroundColor: '#121212', shadowRadius: 0, shadowOffset: {
            height: 0
          }
        } }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: 'Forgot Password',
                      headerBackTitle: 'Back' }}/>
        <Stack.Screen name="ForgotPassword_Reset" component={ForgotPasswordScreen_Reset} options={{ headerTitle: 'Forgot Password',
                      headerBackTitle: 'Back' }}/>
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{ 
            headerStyle: {
              backgroundColor: '#121212',
              shadowRadius: 0,
              shadowOffset: {
              height: 0,
            }
            },
            headerTitle: '', headerBackTitle: 'Back' }}/>  
        
        <Stack.Screen name="Home" component={HomeNavigator} options={{ headerTitle: 'Filmate', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="NewGroupFilter" component={NewGroupFilter} options={{ headerTitle: 'New Group', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="NewGroupName" component={NewGroupName} options={{ headerTitle: 'New Group', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="NewGroupAddMember" component={NewGroupAddMember} options={{ headerTitle: 'New Group', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: 'Profile Screen', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerTitle: 'Edit Profile', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="RequestScreen" component={RequestScreen} options={{ headerTitle: 'Request Screen', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="TellFriendScreen" component={TellFriendScreen} options={{ headerTitle: 'Tell Friends Screen', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="ShowMovies" component={ShowMovies} options={{ headerTitle: 'Show Movies', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="GroupCreated" component={GroupCreated} options={{ headerTitle: 'Group Created', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="navigation" component={GenreMoodNavigator} options={{ headerTitle: 'navigation', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="AddFriends" component={AddFriends} options={{ headerTitle: 'Add Friends', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="FriendsInvited" component={FriendsInvited} options={{ headerTitle: 'Friends Invited', headerBackTitle: 'Back' }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;