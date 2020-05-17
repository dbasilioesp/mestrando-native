import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Feathers from '../providers/feathers-client';
import api from '../providers/api';
import Title from '../components/Title';
import Label from '../components/forms/Label';
import Email from '../components/forms/Email';
import Password from '../components/forms/Password';

export default class SignIn extends Component {
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

  async fetchAuth() {
    const data = {
      strategy: 'local',
      email: this.state.email,
      password: this.state.password,
    };

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };

    console.log(options);

    try {
      // const result = await Feathers.service('users').find({});
      const response = await fetch(
        'http://192.168.100.10:3030/authentication',
        options,
      );
      const result = await response.json();
      console.log('result', result);
    } catch (error) {
      console.warn(error);
    }
  }

  async handleSubmit() {
    const data = {
      strategy: 'local',
      email: this.state.email,
      password: this.state.password,
    };

    try {
      const result = await api.authenticate(data);
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

const styles = StyleSheet.create({
  container: {},
});
