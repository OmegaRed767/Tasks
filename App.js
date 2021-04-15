/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar, View} from 'react-native';

//imports of my component
import {FlatListTask, AddMovie} from './Components/index';

//colors
import colors from './Colors/colors';
//react navigation
import {NavigationContainer} from '@react-navigation/native';
//stack navigation
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={FlatListTask} name="FlatListTask" />
      <Stack.Screen component={AddMovie} name="AddMovie" />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.black} />
        <MyStack />
      </NavigationContainer>
    </View>
  );
};

export default App;
