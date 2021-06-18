import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from './styles';

import { Login, Home } from './components'
const { Navigator, Screen } = createStackNavigator();

const App = () => <NavigationContainer >
  <Navigator initialRouteName="Home" style="{styles.container}">
    <Screen name="Login" component={Login} options={{title: ''}} />
    <Screen name="Home" component={Home} options={{title: ''}} />
  </Navigator>
</NavigationContainer>

export default App;