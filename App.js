import React from 'react';
import 'react-native-gesture-handler'

import Lending from './components/auth/Lending';
import Register from './components/auth/Register';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/auth/Login';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lending" component={Lending} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}


const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Lending">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
