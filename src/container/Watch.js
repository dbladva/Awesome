import {Text, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      text: "Hello"
    };
  }

  timeBtn = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentDidMount = () => {
    setInterval(() => this.timeBtn(), 1000);
    setInterval(() => this.timeBtn2(), 1000);
  };

 
  timeBtn3 = () => {
    this.timeBtn2()
  }

  timeBtn2 = () => {
    this.setState({
        text: this.state.time.toLocaleTimeString()
      })
  }
  render() {
    return (
      <View>
        <Text>{this.state.time.toLocaleTimeString()}</Text>

        <Text>{this.state.text}</Text>

        <Button
          onPress={() => this.timeBtn3()}
          title="See Time"
          color="#841584"
        />
        <Text>.......................</Text>
        <Button title="See Date" color="#841584" />
      </View>
    );
  }
}
