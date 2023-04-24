import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './screens/Home';
import Alertpage from './screens/AlertMessage';
import Feeds from './screens/Feeds';
import Profile from './screens/Profile';
import {Svg, Path} from 'react-native-svg'
import axios from 'axios';
import {backendURL} from "./app.json"
import Geolocation from '@react-native-community/geolocation'
import {useState} from 'react'

const Tab = createBottomTabNavigator();

const App= () => {

  const [lat, setLat] = useState(28);
  const [lan, setLan] = useState(77);
  const [check, setCheck] = useState(false);
  const [alertdata, setAlertData] = useState({});


      Geolocation.getCurrentPosition((data)=>{
          setLat(data.coords.latitude);
          setLan(data.coords.longitude);
          console.log(data.coords)
      })
      axios.get(`${backendURL}/getspots?lat=${lat}&long=${lan}`)
      .then(function (response) {
        // if(response.data.status == 200) {
        //   setCheck(true);
        // }
        console.log(response.data.status)
      })
      .catch(function (error) {
          console.log(error)
      })

  return (
    <NavigationContainer>
    {!check &&
    <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#F4717F',
              tabBarInactiveTintColor: 'grey',
              tabBarLabelStyle: {
                fontFamily: 'Poppins-Regular',
                paddingBottom: 10
              },
              tabBarStyle: {
                backgroundColor: '#101651',
                padding: 20,
              },
            }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M22.4442 30.5999H7.20001C6.24523 30.5999 5.32955 30.2206 4.65442 29.5455C3.97929 28.8704 3.60001 27.9547 3.60001 26.9999V8.0999C3.60001 7.38382 3.88447 6.69706 4.39082 6.19071C4.89717 5.68437 5.58392 5.3999 6.30001 5.3999H18.9C19.6161 5.3999 20.3028 5.68437 20.8092 6.19071C21.3155 6.69706 21.6 7.38382 21.6 8.0999V10.7999H29.6712C31.05 10.8413 32.4 11.8799 32.4 13.6475V22.4999C32.4 23.216 32.1155 23.9027 31.6092 24.4091C31.1028 24.9154 30.4161 25.1999 29.7 25.1999H25.9092L25.1478 28.4813C24.8058 29.9483 23.616 30.6359 22.4442 30.5999ZM27.018 12.5999H21.6V27.8675C21.6 28.9475 23.1498 29.1275 23.3946 28.0745L26.892 13.0139C26.928 12.8681 26.9694 12.7313 27.018 12.5999ZM9.90001 12.5999C10.1387 12.5999 10.3676 12.5051 10.5364 12.3363C10.7052 12.1675 10.8 11.9386 10.8 11.6999C10.8 11.4612 10.7052 11.2323 10.5364 11.0635C10.3676 10.8947 10.1387 10.7999 9.90001 10.7999C9.66131 10.7999 9.43239 10.8947 9.26361 11.0635C9.09483 11.2323 9.00001 11.4612 9.00001 11.6999C9.00001 11.9386 9.09483 12.1675 9.26361 12.3363C9.43239 12.5051 9.66131 12.5999 9.90001 12.5999ZM9.00001 17.9999C9.00001 18.2386 9.09483 18.4675 9.26361 18.6363C9.43239 18.8051 9.66131 18.8999 9.90001 18.8999H15.3C15.5387 18.8999 15.7676 18.8051 15.9364 18.6363C16.1052 18.4675 16.2 18.2386 16.2 17.9999C16.2 17.7612 16.1052 17.5323 15.9364 17.3635C15.7676 17.1947 15.5387 17.0999 15.3 17.0999H9.90001C9.66131 17.0999 9.43239 17.1947 9.26361 17.3635C9.09483 17.5323 9.00001 17.7612 9.00001 17.9999ZM9.00001 24.2999C9.00001 24.5386 9.09483 24.7675 9.26361 24.9363C9.43239 25.1051 9.66131 25.1999 9.90001 25.1999H15.3C15.5387 25.1999 15.7676 25.1051 15.9364 24.9363C16.1052 24.7675 16.2 24.5386 16.2 24.2999C16.2 24.0612 16.1052 23.8323 15.9364 23.6635C15.7676 23.4947 15.5387 23.3999 15.3 23.3999H9.90001C9.66131 23.3999 9.43239 23.4947 9.26361 23.6635C9.09483 23.8323 9.00001 24.0612 9.00001 24.2999Z" fill="#F8F8F8"/>
                    </Svg>
            
          },
        }}
        name={'Feeds'}
        component={Feeds}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <Svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M8.72997 24.7018V20.6784C8.72997 19.6514 9.56865 18.8188 10.6032 18.8188H14.385C14.8818 18.8188 15.3583 19.0147 15.7096 19.3635C16.0609 19.7122 16.2582 20.1852 16.2582 20.6784V24.7018C16.2551 25.1287 16.4238 25.5393 16.7268 25.8423C17.0298 26.1454 17.4422 26.3158 17.8723 26.3158H20.4524C21.6574 26.3189 22.8141 25.8458 23.6673 25.0011C24.5205 24.1563 25 23.0092 25 21.8129V10.3511C25 9.38482 24.5685 8.46821 23.8219 7.84825L15.0448 0.889301C13.518 -0.33084 11.3304 -0.291445 9.8492 0.982867L1.27238 7.84825C0.490448 8.44994 0.0230951 9.36926 0 10.3511V21.8012C0 24.2945 2.03603 26.3158 4.5476 26.3158H7.0688C7.96214 26.3158 8.68815 25.6003 8.69463 24.7135L8.72997 24.7018Z" fill="white"/>
                    </Svg>
    
          },
        }}
        name={'Home'}
        component={()=> <Homepage lat={lat} lan={lan} />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M15 0C16.9891 0 18.8968 0.790176 20.3033 2.1967C21.7098 3.60322 22.5 5.51088 22.5 7.5C22.5 9.48912 21.7098 11.3968 20.3033 12.8033C18.8968 14.2098 16.9891 15 15 15C13.0109 15 11.1032 14.2098 9.6967 12.8033C8.29018 11.3968 7.5 9.48912 7.5 7.5C7.5 5.51088 8.29018 3.60322 9.6967 2.1967C11.1032 0.790176 13.0109 0 15 0ZM15 18.75C23.2875 18.75 30 22.1062 30 26.25V30H0V26.25C0 22.1062 6.7125 18.75 15 18.75Z" fill="white"/>
                    </Svg>
            
            
          },
        }}
        name={'Profile'}
        component={Profile}
      />
    </Tab.Navigator>}
    {check && <Alertpage handleClose={setCheck(false)} />}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
