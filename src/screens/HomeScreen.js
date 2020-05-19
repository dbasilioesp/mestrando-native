import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import api from '../providers/api';
import {API_URL} from 'react-native-dotenv';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
    };
  }

  async componentDidMount() {
    try {
      const user = api.getUser();
      const characters = await api
        .service('characters')
        .find({query: {owner: user._id}});
      this.setState({
        characters,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {characters} = this.state;

    const getImage = name => {
      return `${API_URL}/files/${name}`;
    };

    return (
      <View>
        {characters
          ? characters.data.map(item => {
              return (
                <View key={item._id}>
                  <Image source={{uri: getImage(item.portrait)}} />
                  <Text>{item.name}</Text>
                </View>
              );
            })
          : null}
      </View>
    );
  }
}
