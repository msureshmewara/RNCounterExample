/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//https://www.youtube.com/watch?v=KcC8KZ_Ga2M&list=PLy9JCsy2u97m3nSbw0xzo-X4EEoZiikd8
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import CounterApp from './src/CounterApp';


//create a initial state;
const initialState = {
  counter: 0
}
//create a reducer to pass into the store
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter+1}
      case 'DECREASE_COUNTER':
          return {counter: state.counter-1}
  }
  return state;
}
//create store to store the state
const store = createStore(reducer);
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;
