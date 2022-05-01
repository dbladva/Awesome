import {Text, View} from 'react-native';
import React, {Component} from 'react';

// React Native Component Lifecycle

export default class Rnclc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  // Request to server
  componentDidMount = () => {
    setInterval(() => this.tick(), 1000);
  };

  // when update state
  componentDidUpdate = () => {};
  // when leave a screen
  componentWillUnmount = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          padding: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            shadowOpacity: 2,
            fontWeight: 'bold',
            shadowColor: '#ADA19F',
            shadowOffset: {height: 6, width: 5},
            shadowRadius: 2,
          }}>
          {this.state.time.toLocaleTimeString()}
        </Text>
        <Text style={{fontSize: 25,color: 'white',}}>
          {this.state.time.toLocaleDateString()}
        </Text>
      </View>
    );
  }
}
