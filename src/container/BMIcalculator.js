import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import React, {useState} from 'react';

export default function BMIcalculator() {
  const [bmiResult, setBmiResult] = useState('');

  const [result, setResult] = useState(result);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const Calculate = (height, weight) => {
    let count =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    count = count.toFixed(2);
    setResult(count);

    if (result < 18.5) {
      setBmiResult('UnderWeight');
    } else if (result >= 18.5 && result < 25) {
      setBmiResult('Normal');
    } else if (result >= 25 && result <= 30) {
      setBmiResult('OverWeight');
    } else if (result > 30) {
      setBmiResult('Obesity');
    } else {
      ('Calculate Result :');
    }
  };
  const heightHendler = text => {
    setHeight(text);
  };
  const weightHendler = text => {
    setWeight(text);
  };

  console.log(result);
  return (
    <View style={styles.container}>
      <View style={styles.resultView}>
        <Text style={styles.resultTitle}>Your Result</Text>
        <Text style={styles.resultPercentage}>{result}</Text>
        <Text style={styles.suggest}>Try For Some More Healthy Snack</Text>
      </View>

      <View>
        <View style={styles.hWView}>
          <View>
            <Text style={styles.genderTitle}>Gender</Text>
            <TextInput style={styles.input} placeholder="Gender" />
          </View>
          <View>
            <Text style={styles.genderTitle}>Age</Text>
            <TextInput style={styles.input} placeholder="Age" />
          </View>
        </View>
        <View style={[{marginTop: 50}, styles.hWView]}>
          <View>
            <Text style={styles.genderTitle}>Height(cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Height"
              onChangeText={hValue => heightHendler(hValue)}
            />
          </View>
          <View>
            <Text style={styles.genderTitle}>Weight(Kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Weight"
              onChangeText={wValue => weightHendler(wValue)}
            />
          </View>
        </View>
      </View>

      <View style={styles.calculatView}>
        <Button
          title="Calculate"
          onPress={() => Calculate(height, weight)}
          color="#00FFFF"
        />
      </View>
      <View>
        <View style={{alignSelf: 'center'}}>
          {bmiResult === 'UnderWeight' && (
            <Text style={styles.resultText}>{bmiResult}</Text>
          )}

          {bmiResult === 'Normal' && (
            <Text style={styles.resultText}>{bmiResult}</Text>
          )}
          {bmiResult === 'OverWeight' && (
            <Text style={styles.resultText}>{bmiResult}</Text>
          )}
          {bmiResult === 'Obesity' && (
            <Text style={styles.resultText}>{bmiResult}</Text>
          )}
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{borderWidth: 5, borderColor: 'red', width: '25%'}} />
          <View style={{borderWidth: 5, borderColor: 'blue', width: '25%'}} />
          <View style={{borderWidth: 5, borderColor: 'orange', width: '25%'}} />
          <View style={{borderWidth: 5, borderColor: 'yellow', width: '25%'}} />
        </View>

        <View style={{flexDirection: 'row'}}>
          {bmiResult === 'UnderWeight' && (
            <Image
              style={styles.ArrowLogoRed}
              source={require('../../src/container/images/up-arrow.png')}
            />
          )}
          {bmiResult === 'Normal' && (
            <Image
              style={styles.ArrowLogoBlue}
              source={require('../../src/container/images/up-arrow.png')}
            />
          )}
          {bmiResult === 'OverWeight' && (
            <Image
              style={styles.ArrowLogoOrange}
              source={require('../../src/container/images/up-arrow.png')}
            />
          )}
          {bmiResult === 'Obesity' && (
            <Image
              style={styles.ArrowLogoYellow}
              source={require('../../src/container/images/up-arrow.png')}
            />
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(135,177,227,255)',
    justifyContent: 'space-evenly',
    padding: 50,
  },
  resultView: {},
  hWView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  calculatView: {},
  resultTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultPercentage: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
  },
  suggest: {
    textTransform: 'uppercase',
    color: 'white',
    width: '70%',
    fontSize: 16,
    opacity: 0.8,
    marginTop: 10,
  },
  genderView: {
    Width: '25%',
    justifyContent: 'space-between',
  },
  genderValue: {
    color: 'white',
  },
  genderTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 100,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  dropdown: {
    height: 50,
    width: 50,
  },

  // Arrow Icon

  ArrowLogoRed: {
    height: 30,
    width: 30,
    tintColor: 'red',
    position: 'absolute',
    left: '7%',
  },
  ArrowLogoBlue: {
    height: 30,
    width: 30,
    tintColor: 'blue',
    position: 'absolute',
    left: '32%',
  },
  ArrowLogoOrange: {
    height: 30,
    width: 30,
    tintColor: 'orange',
    position: 'absolute',
    right: '30%',
  },
  ArrowLogoYellow: {
    height: 30,
    width: 30,
    tintColor: 'yellow',
    position: 'absolute',
    right: 0,
  },

  resultText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
