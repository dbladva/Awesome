import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const NewCalculator = () => {
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

  const [equation, setEquation] = useState('');

  const handelEuation = k => {
    setEquation(equation + k);
  };

  const handelClear = () => {
    setEquation(' ');
  };

  const handelDelet = () => {
    setEquation(equation.substring(0, equation.length - 1));
  };
  const handelEqual = () => {
    if (equation !== '') {
      let result = eval(equation);
      setEquation(result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.OutputView}>

      

        
        <Text style={styles.resultText}>{equation}</Text>
      </View>

      <View style={styles.InputView}>
        {arr.map((key, index) => {
          return key === '+' ||
            key === '-' ||
            key === '*' ||
            key === '/' ||
            key === '%' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <TouchableOpacity onPress={() => handelEuation(key)}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : key === 'C' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <TouchableOpacity onPress={() => handelClear()}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : key === 'DEL' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <TouchableOpacity onPress={() => handelDelet()}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : key === '=' ? (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <TouchableOpacity onPress={() => handelEqual()}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.returnView}>
              <View style={styles.underView}>
                <TouchableOpacity onPress={() => handelEuation(key)}>
                  <Text
                    style={[
                      styles.DataText,
                      index == 0 ||
                      index == 1 ||
                      index == 2 ||
                      index == 3 ||
                      index == 7 ||
                      index == 11 ||
                      index == 15 ||
                      index == 19
                        ? styles.red
                        : styles.white,
                    ]}>
                    {key}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <StatusBar backgroundColor="white" barStyle="light-content" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  OutputView: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
  },
  InputView: {
    flex: 1.3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#ecf3fe',
    borderRadius: 20,
  },
  returnView: {
    width: '24%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '20%',
    borderRadius: 100,
    margin: -1,
  },
  DataText: {
    fontSize: 30,
    color: 'white',
    padding: 11,
    // backgroundColor: '#f1f6fe'
  },
  underView: {
    height: 68,
    width: 68,
    // backgroundColor: 'rgba(31,31,31,255)',
    backgroundColor: '#f1f6fe',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowOpacity: 1,
    shadowColor: 'red',
    shadowOffset: {height: 4, width: 4},
    shadowRadius: 5,
    borderWidth: 0.1,
    borderColor: 'black',
    elevation: 1,
  },
  red: {
    color: 'green',
    // color: 'red',
  },
  white: {
    // color: 'white',
    color: 'black',
  },
  resultText: {
    position: 'absolute',
    bottom: 5,
    right: 20,
    color: 'black',
    fontSize: 70,
    letterSpacing: 2,
  },
});

export default NewCalculator;
