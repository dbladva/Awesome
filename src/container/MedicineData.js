import { View, Text } from 'react-native'
import React from 'react'

export default function MedicineData() {

    const Data = [
        { id: 1, name: 'Paracetamol', price: '365', expiry: '2029' },
        { id: 2, name: 'Dolo 650', price: '656', expiry: '2023' },
        { id: 3, name: 'Calpol', price: '560', expiry: '2025' },
        { id: 4, name: 'Dupixent', price: '520', expiry: '2024' },
        { id: 5, name: 'Humira', price: '550', expiry: '2022' },
        { id: 6, name: 'Advil', price: '280', expiry: '2027' },
        { id: 7, name: 'Genpril', price: '350', expiry: '2022' },
        { id: 8, name: 'Ecpirin', price: '250', expiry: '2025' },
        { id: 9, name: 'Halfprin', price: '580', expiry: '2024' },
        { id: 10, name: 'Nuprin', price: '450', expiry: '2026' },
    ];

    Data.map((d) => {
        let Name = d.name;
        console.log("----------------" + "Id : " + d.id + "----------------");
        console.log("Name : " + Name);
        console.log("Price : " + d.price);
        console.log("Expiry : " + d.expiry);    
    })

    let FilterData = Data.filter((a) => a.price > 400 && a.expiry > 2025);
    console.log(FilterData);


  return (
    <View>
      <Text>Hello WOrld</Text>
    </View>
  )
}
