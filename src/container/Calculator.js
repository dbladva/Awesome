import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Calculator() {

  const arr = ["C", "()", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="]

  arr.map((a) => {
    console.log(a);
  })
  return (
    <View style={styles.container}>
      <View style={styles.InputView}>
      </View >
      <View style={styles.btnMainView}>
        {
          arr.map((Key, index) => {
          
              return (
                <View style={styles.Button}>
                  <Text style={styles.btnText}>{Key}</Text>
                  </View>
              )
          
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  InputView: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center'
  },
  btnMainView: {
    width: '100%',
    height: '50%',  
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnText: {
    color: "white",
    fontSize: 30,
    padding: 5,
    // borderWidth: 1,
    // borderColor: 'red',
    // borderRadius: 60 , 
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25%',
    minHeight: '20%',
    flex: 2,
   
  }

})