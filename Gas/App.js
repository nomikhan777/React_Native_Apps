import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './/src/screens/SplashScreen'
import LoginScreeen from './/src/screens/LoginScreen'
import SignupScreen from './/src/screens/SignupScreen'
import PasswordScreen from './/src/screens/PasswordScreen'
import PassowrdScreen from './/src/screens/PasswordScreen';
import CreateAccountScreen from './/src/screens/CreateAccountScreen'
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreeen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="PasswordScreen" component={PassowrdScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack