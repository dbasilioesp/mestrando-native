import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Email extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, onChange, onSubmitEditing} = this.props;

    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={value}
        onChangeText={onChange}
        keyboardType="email-address"
        maxLength={50}
        placeholder="Type entry here"
        returnKeyType="next"
        textContentType="emailAddress"
        autoCompleteType="email"
        autoCapitalize="none"
        blurOnSubmit={false}
        onSubmitEditing={onSubmitEditing}
      />
    );
  }
}
