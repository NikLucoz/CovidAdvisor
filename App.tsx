import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//@ts-ignore
import Home from './src/pages/Home.tsx';
//@ts-ignore
import ListaRegioni from './src/pages/ListaRegioni.tsx'
//@ts-ignore
import InfoRegione from './src/pages/InfoRegione.tsx'

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options = {{headerShown: false, tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} /> ) }}/>      
      <Tab.Screen name="Lista Regioni" component={ListaRegioni} options = {{headerShown: false, tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="map-marker-radius" color={color} size={size} /> ) }} />
      <Tab.Screen name="Info Regione" component={InfoRegione} options = {{headerShown: false, tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="map-marker-radius" color={color} size={size} /> ) }} />

    </Tab.Navigator>
  );
}; 

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
