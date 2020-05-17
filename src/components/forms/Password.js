import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Password extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, onChange, refs, onSubmitEditing = () => {}} = this.props;

    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={value}
        onChangeText={onChange}
        secureTextEntry={true}
        textContentType="password"
        maxLength={50}
        placeholder="Type password here"
        returnKeyType="done"
        autoCapitalize="none"
        onSubmitEditing={onSubmitEditing}
        ref={refs}
      />
    );
  }
}
