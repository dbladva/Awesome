import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Calculator() {

  const arr = [" C ", " () ", " % ", " / ", " 7 ", " 8 ", " 9 ", " * ", " 4 ", " 5 ", " 6 ", " - ", " 1 ", " 2 ", " 3 ", " + ", "+/-", " 0 ", " . ", " = "]

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
    justifyContent: 'center'
  },
  btnMainView: {
   flex: 1, 
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnText: {
    marginTop: 5,
    color: "white",   
    padding: 15,
    fontSize: 30,
    borderWidth: 0.01,
    borderColor: 'red',
    borderRadius: 200 , 
    textAlign: 'center',
    backgroundColor: "rgba(31,31,31,255)", 
  },
  Button: {
    minWidth: '25%',
    minHeight: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})