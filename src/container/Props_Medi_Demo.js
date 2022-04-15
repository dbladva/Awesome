import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Props_Medi_Data from './Props_Medi_Data';

export default function Props_Medi_Demo(props) {
  const MedicineData = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      content: ['x', 'y', 'z'],
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      content: ['a', 'b', 'c'],
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      content: ['m', 'n', 'p'],
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      content: ['a', 's', 'd'],
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      content: ['e', 'r', 't'],
    },
  ];

  return (
    <View>
      {MedicineData.map((a) => {
        let { id, name } = a

        return (
          <View>
            <Text>{name}</Text>
            <Props_Medi_Data id />
          </View>
        )
        
      })}

    </View>
  );
}
