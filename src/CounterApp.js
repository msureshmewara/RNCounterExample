/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import { connect } from "react-redux";
import { incrementCounter, decreaseCounter } from "../src/actions";


class CounterApp extends Component {
  
  incrementCounter =()=> {
    console.log('this.props.counter', this.props.counter)
    this.props.dispatch(incrementCounter())
  }
  decreaseCounter =() => {
    console.log('this.props.counter', this.props)
    this.props.dispatch(decreaseCounter())
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => this.incrementCounter()}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
        <TouchableOpacity onPress={() => this.decreaseCounter()}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


//connect--> connection props to the current class (CounterApp)
export default connect(state => ({ counter: state.counter }))(CounterApp);
