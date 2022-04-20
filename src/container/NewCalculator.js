import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Calculator = () => {
  const arr = [
    'C',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
    '=',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.OutputView}></View>

      <View style={styles.InputView}>
        {arr.map(Data => {
          <View>
            <Pressable>
              <Text>{Data}</Text>
            </Pressable>
          </View>;
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  OutputView: {
    flex: 1,
    backgroundColor: 'red',
  },
  InputView: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Calculator;
