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
      <View >
          <Text>
            {this.state.time.toLocaleTimeString()}
          </Text>
      </View>   
    );
  }
}
