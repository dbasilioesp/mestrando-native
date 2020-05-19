/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Store from './store';
import Router from './Router';

export default class App extends React.Component {
  render() {
    let isSignedIn = false;

    return (
      // <SafeAreaView>
      //   <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <Provider store={Store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
      //   </ScrollView>
      // </SafeAreaView>
    );
  }
}
