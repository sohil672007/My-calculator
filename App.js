import  React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Calc from './Screens/Calc'
import NotepadScreen from './Screens/NotepadScreen'

export default class App extends React.Component{
render(){
  return(
    
    <AppContainer/>
   
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Calculator: {screen:Calc},
  Notepad: {screen:NotepadScreen}
});

const AppContainer =  createAppContainer(TabNavigator);
