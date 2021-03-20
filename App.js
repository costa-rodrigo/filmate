import * as React from 'react';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
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
// import NoFriends from './screens/Home/FriendScreens/NoFriends';
// import InvitedToGroup from './screens/Home/GroupScreens/InvitedToGroup';
import FriendScreen from './screens/Home/FriendScreens/FriendScreen';
import GroupScreen from './screens/Home/GroupScreens/GroupScreen';
// import HomeNavigator from './navigation/HomeNavigator';
// import FriendTabButton from './screens/Home/FriendTabButton';
// import UsersGroups from './screens/Home/GroupScreens/UsersGroups';
// https://docs.expo.io/versions/latest/sdk/splash-screen/
// ADD splash screen

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      'Nunito-Regular': {
        uri: require('./assets/fonts/Nunito-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-SemiBold': {
        uri: require('./assets/fonts/Nunito-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-Bold': {
        uri: require('./assets/fonts/Nunito-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'Nunito-ExtraBold': {
        uri: require('./assets/fonts/Nunito-ExtraBold.ttf'),
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
        // <LoginScreen />
        <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: '#121212', shadowRadius: 0, shadowOffset: {
              height: 0
            } }, headerTitleStyle: { fontWeight: 'bold' }}}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '', headerStyle: {
            backgroundColor: '#121212', shadowRadius: 0, shadowOffset: {
              height: 0
            }
          } }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerStyle: {
            backgroundColor: '#121212', shadowRadius: 0, shadowOffset: { height: 0 } } }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: '', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="ForgotPassword_Reset" component={ForgotPasswordScreen_Reset} options={{ headerTitle: '', headerBackTitle: 'Back' }}/>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerStyle: { backgroundColor: '#121212', shadowRadius: 0, shadowOffset: { height: 0 }}, headerTitle: '', headerBackTitle: 'Back' }}/>  
          {/* <Stack.Screen name="UsersGroups" component={UsersGroups} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/>  */}
          <Stack.Screen name="NewGroupFilter" component={Platform} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="NewGroupName" component={GroupName} options={{ headerTitle: '', headerBackTitle: 'Invite Friends' }}/> 
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerTitle: 'Edit Profile', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="ShowMovies" component={ShowMovies} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="GroupCreated" component={GroupCreated} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="navigation" component={GenreMoodNavigator} options={{ headerTitle: '', headerBackTitle: 'Filter movies' }}/> 
          <Stack.Screen name="AddFriends" component={AddFriends} options={{ headerTitle: '', headerBackTitle: 'Add a friend' }}/> 
          <Stack.Screen name="FriendsInvited" component={FriendsInvited} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="CreateGroup" component={CreateGroup} options={{ headerTitle: '', headerBackTitle: 'Invite Friends' }}/> 
          {/* <Stack.Screen name="NoFriends" component={NoFriends} options={{ headerTitle: 'NoFriends', headerBackTitle: 'Back' }}/>  */}
          <Stack.Screen name="FriendScreen" component={FriendScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null}}/> 
          <Stack.Screen name="GroupScreen" component={GroupScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/> 
          {/* <Stack.Screen name="FriendTabButton" component={FriendTabButton} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/>  */}
        </Stack.Navigator>
      </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}

