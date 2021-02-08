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
            headerTitle: 'Login',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{
          headerBackTitle: 'Back'
        }}/>
        <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} 
        options={{
          headerBackTitle: 'Back'
        }}/>

        <Stack.Screen 
        name="ForgotPassword_Reset" 
        component={ForgotPasswordScreen_Reset} 
        options={{
          headerBackTitle: 'Back'
        }}/>

        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{
          headerBackTitle: 'Back'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;