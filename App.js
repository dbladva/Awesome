import { View, Text, SafeAreaView,ImageBackground ,StyleSheet} from 'react-native'
import React from 'react'
import Hello from './src/container/Hello'
import MedicineData from './src/container/MedicineData'
import Destructuring from './src/container/Desturcturing'
import Medi_State_Fun from './src/container/Medi_State_Fun'
import Medi_State_class from './src/container/Medi_State_class'
import Props_Medi_Demo from './src/container/Props_Medi_Demo'
import Rnclc from './src/container/Watch/Rnclc'
import Rnfclc from './src/container/Watch/Rnfclc'
import Kbc from './src/component/Kbc'
import BMIcalculator from './src/container/Calculator/BMIcalculator'
import GSTcalculator from './src/container/Calculator/GSTcalculator'
import Calculator from './src/container/Calculator/Calculator'
import NewCalculator from './src/container/Calculator/NewCalculator'


export default function App() {
  return (

    <View style={{ flex: 1 }}>

      {/* <NewCalculator /> */}
      {/* <BMIcalculator /> */}
      {/* <GSTcalculator /> */}
      <Rnclc />

    </View>
  );
}

