import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Picker} from '@react-native-picker/picker';

export default function BMIcalculator() {
    const Gender = ['Male', 'Female'];
    const [language, setlanguage] = useState('Gender');

    
    
  return (
    <View style={styles.container}>
      <View style={styles.resultView}>
        <Text style={styles.resultTitle}>Your Result</Text>
        <Text style={styles.resultPercentage}>17</Text>
        <Text style={styles.suggest}>Try For Some More Healthy Snack</Text>
      </View>

      <View>
        <View style={styles.hWView}>
          <View>
            <Text style={styles.genderTitle}>Gender</Text>
            {/* <TextInput style={styles.input} placeholder="Gender" /> */}
            <Picker
              selectedValue={language}
              style={{height: 50, width: 140,textAlign: 'left'}}
              onValueChange={(itemValue, itemIndex) =>
                setlanguage({language: itemValue})
              }>
                 
                
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View>
            <Text style={styles.genderTitle}>Age</Text>
            <TextInput style={styles.input} placeholder="Age" />
            
          </View>
        </View>
        <View style={[{marginTop: 50}, styles.hWView]}>
          <View>
            <Text style={styles.genderTitle}>Height(cm)</Text>
            <TextInput style={styles.input} placeholder="Height" />
          </View>
          <View>
            <Text style={styles.genderTitle}>Weight(Kg)</Text>
            <TextInput style={styles.input} placeholder="Weight" />
          </View>
        </View>
      </View>

      <View style={styles.calculatView}>
        <Button
          title="Calculate"
          onPress={() => checkValue()}
          color="#00FFFF"
        />


      </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(135,177,227,255)',
    justifyContent: 'space-around',
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
});
