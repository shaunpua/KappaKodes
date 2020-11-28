import React from 'react'
import DrawerScreen from './../screens/DrawerScreen.js'

export const ProfileScreen = ({navigation}) => <DrawerScreen navigation={navigation} name="Profile"/>
export const Stats = ({navigation}) => <DrawerScreen navigation={navigation} name="Stats"/>
export const LogOut = ({navigation}) => <DrawerScreen navigation={navigation} name="Log Out"/>