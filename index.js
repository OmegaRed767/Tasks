/**
 * @format
 */
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import reducer from './Redux/Reducer/MovieReducer';
import logger from 'redux-logger';
const store = createStore(reducer, applyMiddleware(logger));
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
