import { Image, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import accountIcon from '../assets/account.png';
import homeIcon from '../assets/home.png';
import { horizontalScale, moderateScale, verticalScale } from './Scaling';
import MainPage from './MainPage';
import AccountPage from './AccountPage';

function NavigationBar(){
    const tab = createBottomTabNavigator();

    return(
      <tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {
        backgroundColor: '#ffbef8',
        bottom: verticalScale(30),
        borderRadius: 50,
        width: horizontalScale(300),
        height: verticalScale(70),
        left: horizontalScale(38),
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }}}>
        <tab.Screen name="Feed" component={MainPage} options={{
          tabBarIcon: ({ focused }) =>(
            <Image source={homeIcon} style={{ position: 'relative', width: horizontalScale(40), height: verticalScale(40), top: Platform.OS === 'android' ? 0 : verticalScale(13)}} />
          ), tabBarShowLabel: false
        }}/>
        <tab.Screen name="Account" component={AccountPage} options={{
          tabBarIcon: ({ focused }) =>(
            <Image source={accountIcon} style={{ position: 'relative', width: horizontalScale(40), height: verticalScale(40), top: Platform.OS === 'android' ? 0 : verticalScale(13)}} />
          ), tabBarShowLabel: false
        }}/>
      </tab.Navigator>
    );
  }

export default NavigationBar;