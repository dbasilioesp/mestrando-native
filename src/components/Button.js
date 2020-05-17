import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Theme from '../Theme';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {label, children, onPress} = this.props;

    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 25,
    backgroundColor: Theme.colors.happy,
  },
  text: {
    fontSize: 20,
    fontFamily: Theme.fontFamily.primary,
  },
});
