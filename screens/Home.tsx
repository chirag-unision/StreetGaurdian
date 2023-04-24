import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import  MapmyIndiaGL  from  'mapmyindia-map-react-native-beta';

type Props = {}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home(props: { lat: any; lan: any; }) {
    const [lat, setLat] = useState(props.lat);
    const [lan, setLan] = useState(props.lan);

    const atlasClientId='33OkryzDZsLwiwCWNUPQFHhJ1yPnKA_EjnBuB3_WtRKpgMjzqmEXyJPUA2Ji9LqJbfIWo3c9tR8c5mRO_BMkPA==';
    const atlasClientSecret='lrFxI-iSEg-jBKzZuvf4DRwt2xGn_hxvItc_NIeqU7THRRGDbTfYK1t20PZU6hZZBLA_II0I2i7AglFAse7EkIqMUSVbLeEO';
    const mapSDKKey='bfda91035e35188fd54897f55c730daa';
    const restAPIKey='bfda91035e35188fd54897f55c730daa';
    

    MapmyIndiaGL.setMapSDKKey(mapSDKKey);//place your mapsdkKey
    MapmyIndiaGL.setRestAPIKey(restAPIKey);//your restApiKey
    MapmyIndiaGL.setAtlasClientId(atlasClientId);//your atlasClientId key
    MapmyIndiaGL.setAtlasClientSecret(atlasClientSecret); //your atlasClientSecret key

      const HackMarker = ({children}) =>
      Platform.select({
        ios: children,
        android: (
          <Text
            style={{
              lineHeight: 88, // there is some weird gap, add 40+ pixels
              backgroundColor: '#dcdcde',
            }}>
            {children}
          </Text>
        ),
      });
      
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.name}>Hi Vivek</Text>
            <Text style={styles.location}>Location</Text>
        </View>
        <View style={styles.bottom}>
            <MapmyIndiaGL.MapView style={{flex:1}} >
            <MapmyIndiaGL.Camera
                    ref={c  => (this.camera = c)}
                    zoomLevel={12}
                    minZoomLevel={4}
                    maxZoomLevel={22}
                    centerCoordinate={[lan, lat]}
                    />
            <MapmyIndiaGL.VectorSource
                id="india"
                url="https://vector.mapmyindia.com/style_v2/my_style.json?key=bfda91035e35188fd54897f55c730daa"
              ></MapmyIndiaGL.VectorSource>
            <MapmyIndiaGL.FillLayer
                id="indiaFill"
                sourceLayerID="country"
                style={{
                    fillOpacity: 0.4,
                    fillColor: '#2196F3',
                    fillOutlineColor: '#000',
                }}
                />
              <MapmyIndiaGL.PointAnnotation
                id="markerId"
                title="Marker"
                coordinate={[lan, lat]}>
                <MapmyIndiaGL.Callout title="xyz" />
            </MapmyIndiaGL.PointAnnotation>
            </MapmyIndiaGL.MapView>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EBF2F5'
    },
    top:{
        height: 120,
        padding: 20
    },
    bottom:{
        flex: 1
    },
    name:{
        fontSize: 30,
        fontWeight: '600',
    }
})