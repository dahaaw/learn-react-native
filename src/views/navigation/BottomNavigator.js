import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color}) => <Icon name="home-filled" />}} />
    </Tab.Navigator>
  )
}