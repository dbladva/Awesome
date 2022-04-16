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
      <View style={{height: '100%', width: '100%', marginTop: '100%'}}>
        <View
          style={{
            alignSelf: 'center',
            width: 200,
            height: 100,
            borderWidth: 1,
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 50,
              textAlign: 'center',
              fontSize: 60,
              color: 'blue',
              textShadowColor: '#E91E63',
              fontWeight: 'bold',
              textShadowOffset: {width: 2, height: 4},
              textShadowRadius: 10,
            }}>
            {this.state.time.toLocaleTimeString()}
          </Text>
        </View>
      </View>
    );
  }
}
