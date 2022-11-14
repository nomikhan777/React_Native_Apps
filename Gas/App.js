import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './/src/screens/SplashScreen'
import LoginScreeen from './/src/screens/LoginScreen'
import SignupScreen from './/src/screens/SignupScreen'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreeen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack