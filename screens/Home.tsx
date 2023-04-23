import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
type Props = {}

export default function Home({}: Props) {

    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
          if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization();
          }
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              resolve({latitude, longitude});
            },
            error => reject(error),
            {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 1000,
            },
          );
        });
      };

      useEffect(()=>{
        console.log(getCurrentLocation());
      },[])
      
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