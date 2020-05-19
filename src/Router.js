/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import api from './providers/api';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class Router extends React.Component {
  async componentDidMount() {
    const {signIn} = this.props;

    try {
      console.warn('authentication verification');
      await api.reAuthenticate();
      signIn(true);
      console.warn('authentication finished');
    } catch (error) {
      signIn(false);
    }
  }

  render() {
    const {isSignedIn} = this.props;
    let isLoading = false;

    if (isLoading) {
      // We haven't finished checking for the token yet
      return <SplashScreen />;
    }

    return (
      <Stack.Navigator>
        {isSignedIn === false ? (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.isSignedIn,
});
const mapDispatchToProps = dispatch => ({
  signIn: value => dispatch({type: 'SET_SIGN_IN', value}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
