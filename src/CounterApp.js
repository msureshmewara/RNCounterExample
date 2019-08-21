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
class CounterApp extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => this.props.incrementCounter()}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
        <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
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

//For accesing the store from provider to CounterApp class we need to create below function which takes the arguments as state.
//This function will take state from store and map to the current class state.
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

//Pass actions to modify the states for that we created a below function
function mapDispatchToProps(dispatch) {
    return {
        incrementCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'})
    }
}
//connect--> connection props to the current class (CounterApp)
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
