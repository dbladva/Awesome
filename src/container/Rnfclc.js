import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';

// React Native function component life cycle 

export default function Rnfclc() {

    const [Time, setTime] = useState(new Date())

    const Tick = () => {
        setTime(new Date())
    }

    useEffect(
        () => {
            setInterval(() => Tick(), 1000)
        }, []
    )



    return (
        <View style={{ backgroundColor: "rgba(184, 43, 199, 0.17),", borderRadius: 10, padding: 10 }}>
            <Text style={{ fontSize: 40, shadowOpacity: 2, fontWeight: 'bold', shadowColor: '#ADA19F', shadowOffset: { height: 6, width: 5 }, shadowRadius: 2 }}>{Time.toLocaleTimeString()}</Text>
            <Text style={{ fontSize: 25, }}>{Time.toDateString()}</Text>

            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
                <Text >
                    Sign in with Facebook
                </Text>
            </LinearGradient>
        </View>
    )
}