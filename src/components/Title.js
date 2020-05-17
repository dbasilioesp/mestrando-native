import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from '../Theme';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getFontSize(size) {
    const sizes = {
      minor1: 36,
      minor2: 24,
      major1: 50,
    };

    if (sizes[size]) {
      return {fontSize: sizes[size]};
    } else {
      return {};
    }
  }

  render() {
    const {size, style = {}, children} = this.props;

    const sizeStyle = this.getFontSize(size);

    return <Text style={[styles.title, sizeStyle, style]}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    fontFamily: Theme.fontFamily.primary,
    color: Theme.colors.happy,
  },
});
