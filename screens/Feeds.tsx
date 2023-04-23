import React, { useEffect } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

type Props = {}

export default function Feeds({}: Props) {

  useEffect(()=> {
    // logic here 
  },[]);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                uri: 'https://cdn.telanganatoday.com/wp-content/uploads/2023/04/Telangana-Father-son-die-in-road-accident-in-Nalgonda.jpg',
                }}
            />
            <View>
                <Text style={styles.title}>Title of the Accident</Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', maxHeight: 30, paddingHorizontal: 10}}>
                    <Text style={styles.textStyle1}>Date</Text>
                    <Text style={styles.textStyle1}>Time</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', maxHeight: 30, paddingHorizontal: 10}}>
                    <Text style={styles.textStyle2}>Severnity</Text>
                    <Text style={styles.textStyle2}>Status</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', maxHeight: 30, paddingHorizontal: 10}}>
                    <View></View>
                    <View></View>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        borderWidth: 2,
        borderColor: 'grey'
    },
    image:{
        width: 300,
        height: 180,
        borderRadius: 10
    },
    title:{
        fontWeight: '600',
        color: 'black'
    },
    textStyle1:{
        fontSize: 18,
        color: 'black'
    },
    textStyle2:{
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: 'black',
        borderRadius: 5,
        color: 'white'
    }
})