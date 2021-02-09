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
import GroupScreen from './screens/Home/GroupScreen';
import FriendScreen from './screens/Home/FriendScreen';
import NewGroupFilter from './screens/Home/NewGroupFilter';
import NewGroupName from './screens/Home/NewGroupName';
import NewGroupAddMember from './screens/Home/NewGroupAddMember';
import AddFriends from './screens/Home/AddFriends';
import FriendsInvited from './screens/Home/FriendsInvited';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
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
          headerTitle: 'Create Group',
          headerBackTitle: 'Back'
        }}/>  
        <Stack.Screen name="Screen2" component={OnboardingScreen2} 
        options={{
          headerTitle: 'Filter Mood',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="Screen3" component={OnboardingScreen3} 
        options={{
          headerTitle: 'Swipe Match',
          headerBackTitle: 'Back'
        }}/> 
        <Stack.Screen name="Home" component={HomeNavigator} 
        options={{
          headerTitle: 'Home',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;