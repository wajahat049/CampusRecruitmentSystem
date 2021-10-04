/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from "react-redux"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from "./src/Components/Home"
import Nav from "./src/Config/Nav"

import store from './src/Store';

const App=(props) => {
  return (
  <Provider store={store}>
        <Nav>
       <ScrollView>
      <Home/>
      </ScrollView>
      </Nav>
    
    </Provider>
    

  );
};



export default App;
