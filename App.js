import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Register/LoginScreen';
import SignupScreen from './screens/Register/SignupScreen';
import ForgotPasswordScreen from './screens/Register/ForgotPasswordScreen';
import ForgotPasswordScreen_Reset from './screens/Register/ForgotPasswordScreen_Reset';
import Platform from './screens/Home/GroupScreens/Platform';
import GroupName from './screens/Home/GroupScreens/GroupName';
import AddFriends from './screens/Home/FriendScreens/AddFriends';
import FriendsInvited from './screens/Home/FriendScreens/FriendsInvited';
import ProfileScreen from './screens/Profile/ProfileScreen';
import EditProfile from './screens/Profile/EditProfile';
import ShowMovies from './screens/MovieFilters/ShowMovies';
import Onboarding from './screens/Onboarding/Onboarding';
import GroupCreated from './screens/Home/GroupScreens/GroupCreated';
import CreateGroup from './screens/Home/GroupScreens/CreateGroup';
import GenreMoodNavigator from './navigation/GenreMoodNavigator';
import NoFriends from './screens/Home/FriendScreens/NoFriends';
// import InvitedToGroup from './screens/Home/GroupScreens/InvitedToGroup';
import { StatusBar } from 'react-native';
import FriendScreen from './screens/Home/FriendScreens/FriendScreen';
import GroupScreen from './screens/Home/GroupScreens/GroupScreen';
import HomeNavigator from './navigation/HomeNavigator';
import FriendTabButton from './screens/Home/FriendTabButton';
// https://docs.expo.io/versions/latest/sdk/splash-screen/
// ADD splash screen

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: '#121212', shadowRadius: 0, shadowOffset: {
            height: 0
          } }, 
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
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: '',
                      headerBackTitle: 'Back' }}/>
        <Stack.Screen name="ForgotPassword_Reset" component={ForgotPasswordScreen_Reset} options={{ headerTitle: '',
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
      
        {/* <Stack.Screen 
          name="Home" 
          component={HomeNavigator} 
          options={{headerTitle: '', headerStyle: {
          backgroundColor: '#121212'
        }}}/>  */}
        <Stack.Screen name="NewGroupFilter" component={Platform} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="NewGroupName" component={GroupName} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerTitle: 'Edit Profile', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="ShowMovies" component={ShowMovies} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="GroupCreated" component={GroupCreated} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="navigation" component={GenreMoodNavigator} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="AddFriends" component={AddFriends} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="FriendsInvited" component={FriendsInvited} options={{ headerTitle: 'Friends Invited', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="CreateGroup" component={CreateGroup} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
        <Stack.Screen name="NoFriends" component={NoFriends} options={{ headerTitle: 'NoFriends', headerBackTitle: 'Back' }}/> 
        {/* <Stack.Screen name="InvitedToGroup" component={InvitedToGroup} options={{ headerTitle: '', headerStyle: {
          backgroundColor: '#121212', shadowRadius: 0, shadowOffset: {
            height: 0
          }
        } }}/>  */}
        <Stack.Screen name="FriendScreen" component={FriendScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null}}/> 
        <Stack.Screen name="GroupScreen" component={GroupScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/> 
        <Stack.Screen name="FriendTabButton" component={FriendTabButton} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;