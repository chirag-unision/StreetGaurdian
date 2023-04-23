import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

type Props = {}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AlertMessage({}: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
        uri: 'https://t4.ftcdn.net/jpg/02/05/86/31/360_F_205863186_OjlZS4DyatdDFmGWtiV0jxDgoAMVB4WP.jpg',
        }}
      />
      <Text style={styles.warning}>Blackspot Detected!</Text>
      <Text style={styles.statement}>Ayo, rider. A BlackSpot has been spotted in a radius of 1 km from your current location</Text>
      <View style={styles.box}>
      <Text style={styles.textStyle1}>Fault</Text>
        <Text style={styles.textStyle2}>Low Friction on Road</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.textStyle1}>Severnity</Text>
        <Text style={styles.textStyle2}>Moderate</Text>
      </View>
      <View>
        <Text style={styles.textStyle3}>Follow the Precautions mentioned below:</Text>
        <Text></Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image:{
      width: 300,
      height: 300
    },
    warning:{
      padding: 10,
      fontSize: 30,
      fontWeight: '800',
      color: 'red',
      marginTop: -50
    },
    statement:{
      paddingHorizontal: 30,
      paddingVertical: 10,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center'
    },
    box:{
      padding: 10,
      margin: 10,
      flex: 1,
      flexDirection: 'row',
      maxHeight: 50,
      justifyContent: 'flex-start',
      width: windowWidth - 40
    },
    textStyle1:{
      fontSize: 20,
      fontWeight: '800',
      width: 100,
      color: '#000'
    },
    textStyle2:{
      fontSize: 20
    },
    textStyle3:{
      fontSize: 22,
      fontWeight: '600',
      padding: 10
    }

})