import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Feathers from '../providers/feathers-client';
import api from '../providers/api';
import Title from '../components/Title';
import Label from '../components/forms/Label';
import Email from '../components/forms/Email';
import Password from '../components/forms/Password';
import {connect} from 'react-redux';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'david@gmail.com',
      password: 'david123',
    };
    this.passwordInput = React.createRef();
  }

  focusPasswordInput() {
    this.passwordInput.current.focus();
  }

  async handleSubmit() {
    const {navigation, signIn} = this.props;

    const data = {
      strategy: 'local',
      email: this.state.email,
      password: this.state.password,
    };

    try {
      await api.authenticate(data);
      signIn(true);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const onChangeEmail = value => {
      this.setState({email: value});
    };

    const onChangePassword = value => {
      this.setState({password: value});
    };

    return (
      <View style={styles.container}>
        <View>
          <Label>Email:</Label>
          <Email
            value={this.state.email}
            onChange={onChangeEmail}
            onSubmitEditing={() => this.focusPasswordInput()}
          />
          <Label>Password:</Label>
          <Password
            value={this.state.password}
            onChange={onChangePassword}
            onSubmitEditing={() => this.handleSubmit()}
            refs={this.passwordInput}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  signIn: value => dispatch({type: 'SET_SIGN_IN', value}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);

const styles = StyleSheet.create({
  container: {},
});
