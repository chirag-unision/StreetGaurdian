import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import  MapmyIndiaGL  from  'mapmyindia-map-react-native-beta';

type Props = {}

export default function Home({}: Props) {
    const [lat, setLat] = useState(0);
    const [lan, setLan] = useState(0);

    const atlasClientId='33OkryzDZsLwiwCWNUPQFHhJ1yPnKA_EjnBuB3_WtRKpgMjzqmEXyJPUA2Ji9LqJbfIWo3c9tR8c5mRO_BMkPA==';
    const atlasClientSecret='lrFxI-iSEg-jBKzZuvf4DRwt2xGn_hxvItc_NIeqU7THRRGDbTfYK1t20PZU6hZZBLA_II0I2i7AglFAse7EkIqMUSVbLeEO';
    const mapSDKKey='bfda91035e35188fd54897f55c730daa';
    const restAPIKey='bfda91035e35188fd54897f55c730daa';
    

    MapmyIndiaGL.setMapSDKKey(mapSDKKey);//place your mapsdkKey
    MapmyIndiaGL.setRestAPIKey(restAPIKey);//your restApiKey
    MapmyIndiaGL.setAtlasClientId(atlasClientId);//your atlasClientId key
    MapmyIndiaGL.setAtlasClientSecret(atlasClientSecret); //your atlasClientSecret key


      useEffect(()=>{
        Geolocation.getCurrentPosition((data)=>{
            setLat(data.coords.latitude);
            setLan(data.coords.longitude);
            console.log(data.coords)
        })
      },[])
      
  return (
    <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
        <View style={{flex:1}}>
            <MapmyIndiaGL.MapView style={{flex:1}} >
            <MapmyIndiaGL.Camera
                    ref={c  => (this.camera = c)}
                    zoomLevel={12}
                    minZoomLevel={4}
                    maxZoomLevel={22}
                    centerCoordinate={[77,28]}
                    />
            </MapmyIndiaGL.MapView>
        </View>
        </View>
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