import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {children} = this.props;
    return (
      <View>
        <Text>{children}</Text>
      </View>
    );
  }
}
