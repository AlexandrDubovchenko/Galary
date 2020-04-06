import React from 'react';
import 'react-native-gesture-handler';
import {store} from './redux/store'
import Main from './components/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import ImageScreen from './screens/ImageScreen'
const Stack = createStackNavigator()


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store = {store}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen 
          name = 'HomeScreen'
          component = {Main}
           />
           <Stack.Screen 
           name = 'Photo'
           component = {ImageScreen}
           />
        </Stack.Navigator>
        </Provider>
        
      </NavigationContainer>
    );
  }
};




