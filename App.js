import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import LoginScreen from './screens/Register/LoginScreen';
import SignupScreen from './screens/Register/SignupScreen';
import ForgotPasswordScreen from './screens/Register/ForgotPasswordScreen';
import ForgotPasswordScreen_Reset from './screens/Register/ForgotPasswordScreen_Reset';
import OnboardingScreen1 from './screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from './screens/Onboarding/OnboardingScreen2';
import OnboardingScreen3 from './screens/Onboarding/OnboardingScreen3';

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
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Login'
          }}
        />
        <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{
          headerTitle: 'Sign Up',
          headerBackTitle: 'Back'
        }}/>
        <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/>

        <Stack.Screen 
        name="ForgotPassword_Reset" 
        component={ForgotPasswordScreen_Reset} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/>

        <Stack.Screen 
        name="Screen1" 
        component={OnboardingScreen1} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/>  

        <Stack.Screen 
        name="Screen2" 
        component={OnboardingScreen2} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/> 

        <Stack.Screen 
        name="Screen3" 
        component={OnboardingScreen3} 
        options={{
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back'
        }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;