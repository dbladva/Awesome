import { View, Text } from 'react-native'
import React from 'react'
import Hello from './src/container/Hello'
import MedicineData from './src/container/MedicineData'
import Destructuring from './src/container/Desturcturing'
import Medi_State_Fun from './src/container/Medi_State_Fun'
import Medi_State_class from './src/container/Medi_State_class'
import Props_Medi_Demo from './src/container/Props_Medi_Demo'
import Rnclc from './src/container/Rnclc'
import Watch from './src/container/Watch'
import Rnfclc from './src/container/Rnfclc'

export default function App() {
  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
      <Rnfclc />
      </View>
  )
}