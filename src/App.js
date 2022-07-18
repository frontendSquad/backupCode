// In App.js in a new project

import * as React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import Router from './router';

function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }, [])

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
