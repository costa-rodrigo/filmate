import * as React from 'react';
import { Text, View } from 'react-native';
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
import UsersGroups from './screens/Home/GroupScreens/UsersGroups';
// https://docs.expo.io/versions/latest/sdk/splash-screen/
// ADD splash screen
import * as Font from 'expo-font';

const Stack = createStackNavigator();
export default class App extends React.Component {
// const App = () => {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    console.log("is this working?")
    await Font.loadAsync({
      
      // Load a font `Montserrat` from a static resource
      // Nunito: require('./assets/fonts/Nunito-SemiBold.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Nunito-SemiBold': {
        uri: require('./assets/fonts/Nunito-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  render()  {
   
      return (
        // <View>
        //   <Text style={{marginTop: 50, fontFamily: 'Nunito-SemiBold'}}>HIIII</Text>
        // </View>
      // ) 
   
     
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
          <Stack.Screen name="UsersGroups" component={UsersGroups} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/> 
          <Stack.Screen name="NewGroupFilter" component={Platform} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="NewGroupName" component={GroupName} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerTitle: 'Edit Profile', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="ShowMovies" component={ShowMovies} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="GroupCreated" component={GroupCreated} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="navigation" component={GenreMoodNavigator} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="AddFriends" component={AddFriends} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="FriendsInvited" component={FriendsInvited} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="CreateGroup" component={CreateGroup} options={{ headerTitle: '', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="NoFriends" component={NoFriends} options={{ headerTitle: 'NoFriends', headerBackTitle: 'Back' }}/> 
          <Stack.Screen name="FriendScreen" component={FriendScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null}}/> 
          <Stack.Screen name="GroupScreen" component={GroupScreen} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/> 
          <Stack.Screen name="FriendTabButton" component={FriendTabButton} options={{ headerTitle: '', headerBackTitle: 'Back', headerLeft: null }}/> 
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
 
}

// import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import * as Font from 'expo-font';

// export default class App extends React.Component {
//   state = {
//     fontsLoaded: false,
//   };

//   // async loadFonts() {
//   //   await Font.loadAsync({
//   //     // Load a font `Montserrat` from a static resource
//   //     // Montserrat: require('./assets/fonts/Montserrat.ttf'),

//   //     // Any string can be used as the fontFamily name. Here we use an object to provide more control
//   //     'Montserrat-SemiBold': {
//   //       uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
//   //       display: Font.FontDisplay.FALLBACK,
//   //     },
//   //   });
//   //   this.setState({ fontsLoaded: true });
//   // }

//   // componentDidMount() {
//   //   this.loadFonts();
//   // }

//   render() {
//     // Use the font with the fontFamily property after loading
//     // if (this.state.fontsLoaded) {
//       return (
//         <View style={styles.container}>
//           <Text style={{ fontSize: 20 }}>Default Font</Text>
//           {/* <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>
//             Montserrat-SemiBold
//           </Text> */}
//         </View>
//       );
//     } 
//     // else {
//     //   return null;
//     // }
//   // }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

