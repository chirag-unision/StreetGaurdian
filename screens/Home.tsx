import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
type Props = {}

export default function Home({}: Props) {
  return (
    <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bottom}></View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    top:{
        height: 120,
        borderWidth: 2
    },
    bottom:{
        flex: 1,
        borderWidth: 2
    }
})