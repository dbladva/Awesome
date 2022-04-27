import { View, Text, SafeAreaView,ImageBackground ,StyleSheet} from 'react-native'
import React from 'react'
import Hello from './src/container/Hello'
import MedicineData from './src/container/MedicineData'
import Destructuring from './src/container/Desturcturing'
import Medi_State_Fun from './src/container/Medi_State_Fun'
import Medi_State_class from './src/container/Medi_State_class'
import Props_Medi_Demo from './src/container/Props_Medi_Demo'
import Rnclc from './src/container/Rnclc'
import Rnfclc from './src/container/Rnfclc'
import Calculator from './src/container/Calculator'
import BMIcalculator from './src/container/BMIcalculator'
import NewCalculator from './src/container/NewCalculator'
import GSTcalculator from './src/container/GSTcalculator'
// import KBC from './src/container/KBC'
import Kbc from './src/component/Kbc'



export default function App() {
  return (

    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../Awesome/assets/images/3.jpg')} resizeMode="cover" style={styles.image}>
    
      {/* <NewCalculator /> */}
      {/* <BMIcalculator /> */}
      {/* <GSTcalculator /> */}
      {/* <Theme /> */}
      {/* <GST /> */}
      {/* <KBC /> */}
      <Kbc />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // backgroundColor: 'black',
    flex: 1,
    
    // opacity: 0.5,
  },
}) 