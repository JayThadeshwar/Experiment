import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View} from 'react-native';
import Home from './src/Home';
import Article from './src/Article';

const AppNavigator = createStackNavigator(
  {  
    Home: { screen: Home },  
    Article: { screen: Article, path: 'article/:id', },
  },
  {  
    initialRouteName: "Home"
  }
);
const prefix = 'myapp://myapp/';
const App = createAppContainer(AppNavigator)
const MainApp = () => <App uriPrefix={prefix} />;
export default MainApp;


