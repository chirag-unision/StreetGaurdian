import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './screens/Home';
import Alertpage from './screens/AlertMessage';
import Feeds from './screens/Feeds';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const App= () => {

  return (
    <NavigationContainer>
    <Tab.Navigator
            initialRouteName={'Feeds'}
            screenOptions={{
              headerShown: true,
              tabBarActiveTintColor: '#F4717F',
              tabBarInactiveTintColor: 'grey',
              tabBarLabelStyle: {
                fontFamily: 'Poppins-Regular',
                paddingBottom: 10
              },
              tabBarStyle: {
                backgroundColor: '#fff',
                padding: 20,
              },
            }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            // return <HomeIcon />;
          },
        }}
        name={'Feeds'}
        component={Feeds}
      />
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
