import { View, Text } from 'react-native'
import React from 'react'
import Hello from './src/container/Hello'
import MedicineData from './src/container/MedicineData'
import Destructuring from './src/container/Desturcturing'

export default function App() {
  return (
    <View>
      <MedicineData />
    <Destructuring />
    </View>
  )
}