import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Calculator() {
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

  const handelEuation = (k) => {
      setEquation(equation + k)
  }

  const handelClear = () => {
    setEquation(' ');
  }

  const handelDelet = () => {
    setEquation(equation.substring(0,equation.length - 1))
  }
  const handelEqual = () => {
    if(equation !== '') {
      let result = eval(equation)
      setEquation(result)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.InputView}>
        <Text style={styles.InputText}>{equation}</Text>
      </View>
      <View style={styles.btnMainView}>
        {arr.map((key, index) => {
          return (
            key === '+' || key === '-' || key === '*' || key === '/' || key === '%' ?
              <View style={styles.Button}>
                <Text
                  style={
                    index == 0 || index == 1 || index == 2 || index == 3 || index == 7 || index == 11 || index == 15 || index == 19
                      ? styles.red
                      : styles.white
                  } onPress={() => handelEuation(key)} >
                  {key}
                </Text>
              </View>
              : key === 'C' ?
                <View style={styles.Button}>
                  <Text
                    style={
                      index == 0 || index == 1 || index == 2 || index == 3 || index == 7 || index == 11 || index == 15 || index == 19
                        ? styles.red
                        : styles.white
                    } onPress={() => handelClear()} >
                    {key}
                  </Text>
                </View>

                : key === 'DEL' ? 
                <View style={styles.Button}>
                <Text
                  style={
                    index == 0 || index == 1 || index == 2 || index == 3 || index == 7 || index == 11 || index == 15 || index == 19
                      ? styles.red
                      : styles.white
                  } onPress={() => handelDelet()} >
                  {key}
                </Text>
              </View>
              : key === '=' ?
              <View style={styles.Button}>
              <Text
                style={
                  index == 0 || index == 1 || index == 2 || index == 3 || index == 7 || index == 11 || index == 15 || index == 19
                    ? styles.red
                    : styles.white
                } onPress={() => handelEqual()} >
                {key}
              </Text>
            </View> 

            :
            <View style={styles.Button}>
            <Text
              style={
                index == 0 || index == 1 || index == 2 || index == 3 || index == 7 || index == 11 || index == 15 || index == 19
                  ? styles.red
                  : styles.white
              } onPress={() => handelEuation(key)} >
              {key}
            </Text>
          </View> 
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: 10,
  },
  InputView: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  btnMainView: {
    flex: 1.2,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  InputText: {
    fontSize: 35,
    color: 'white',
    position: 'absolute',
    bottom: 0,
    right: 12,
  },
  btnText: {
    marginTop: 5,
    color: 'white',
    padding: 18,
    fontSize: 30,
    borderWidth: 0.01,
    borderColor: 'red',
    borderRadius: 200,
    textAlign: 'center',
    backgroundColor: 'rgba(31,31,31,255)',
  },
  Button: {
    minWidth: '25%',
    minHeight: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    marginTop: 5,
    color: 'green',
    fontSize: 30,
    borderWidth: 0.01,
    borderColor: 'red',
    borderRadius: 100,
    textAlign: 'center',
  },  
  white: {
    marginTop: 5,
    color: 'white',
    fontSize: 30,
    borderWidth: 0.01,
    borderColor: 'red',
    borderRadius: 200,
    textAlign: 'center',
  }
});
