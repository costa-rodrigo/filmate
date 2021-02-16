import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Register/LoginScreen';
import SignupScreen from './screens/Register/SignupScreen';
import ForgotPasswordScreen from './screens/Register/ForgotPasswordScreen';
import ForgotPasswordScreen_Reset from './screens/Register/ForgotPasswordScreen_Reset';
import OnboardingScreen1 from './screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from './screens/Onboarding/OnboardingScreen2';
import OnboardingScreen3 from './screens/Onboarding/OnboardingScreen3';
import GroupScreen from './screens/Home/GroupScreens/GroupScreen';
import FriendScreen from './screens/Home/FriendScreens/FriendScreen';
import NewGroupFilter from './screens/Home/GroupScreens/NewGroupFilter';
import NewGroupName from './screens/Home/GroupScreens/NewGroupName';
import NewGroupAddMember from './screens/Home/GroupScreens/NewGroupAddMember';
import AddFriends from './screens/Home/FriendScreens/AddFriends';
import FriendsInvited from './screens/Home/FriendScreens/FriendsInvited';
import ProfileScreen from './screens/Profile/ProfileScreen';
import EditProfile from './screens/Profile/EditProfile';
import RequestScreen from './screens/Profile/RequestScreen';
import TellFriendScreen from './screens/Profile/TellFriendScreen';
import GenreFilterScreen from './screens/MovieFilters/GenreFilterScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// https://docs.expo.io/versions/latest/sdk/splash-screen/
// ADD splash screen

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = props => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Groups" component={GroupScreen} />
        <Tab.Screen name="Friends" component={FriendScreen} />
    </Tab.Navigator> 
    )
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: 'white',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          // color: 'black'
        },
      }}>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            headerTitle: 'Login'
          }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} 
        options={{
          headerTitle: 'Sign Up',
          headerBackTitle: 'Back'
        }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/>
        <Stack.Screen name="ForgotPassword_Reset" component={ForgotPasswordScreen_Reset} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/>
        <Stack.Screen name="Screen1" component={OnboardingScreen1} 
        options={{
          headerTitle: '',
          headerBackTitle: 'Back'
        }}/>  
        <Stack.Screen name="Screen2" component={OnboardingScreen2} 
        options={{
          headerTitle: '',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="Screen3" component={OnboardingScreen3} 
        options={{
          headerTitle: '',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="Home" component={HomeNavigator} 
        options={{
          headerTitle: 'Filmate',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="NewGroupFilter" component={NewGroupFilter} 
        options={{
          headerTitle: 'New Group',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="NewGroupName" component={NewGroupName} 
        options={{
          headerTitle: 'New Group',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="NewGroupAddMember" component={NewGroupAddMember} 
        options={{
          headerTitle: 'New Group',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="AddFriends" component={AddFriends} 
        options={{
          headerTitle: 'Add Friends',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="FriendsInvited" component={FriendsInvited} 
        options={{
          headerTitle: 'Friends Invited',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} 
        options={{
          headerTitle: 'Profile Screen',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="EditProfile" component={EditProfile} 
        options={{
          headerTitle: 'Edit Profile',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="RequestScreen" component={RequestScreen} 
        options={{
          headerTitle: 'Request Screen',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="TellFriendScreen" component={TellFriendScreen} 
        options={{
          headerTitle: 'Tell Friends Screen',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="GenreFilterScreen" component={GenreFilterScreen} 
        options={{
          headerTitle: 'Genre Filter',
          headerBackTitle: 'Back'
        }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;