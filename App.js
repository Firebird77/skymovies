import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from './constants'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Order, User } from './screens'
import "react-native-gesture-handler"
import Icon from "react-native-vector-icons/AntDesign"





const App = () => {
  ////////////////////////////////////////////////////////////////////////////////////
  // Variables
  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator();
  ////////////////////////////////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////////////////////////////////
  // Functions
  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Home" component={Home} screenOptions={{ headerShown: false, }} />
        <Stack.Screen name="Order" component={Order} />

      </Stack.Navigator>
    )
  }

  function OrderStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
      </Stack.Navigator>
    )
  }

  function UserStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    )
  }
  ////////////////////////////////////////////////////////////////////////////////////
  


  ////////////////////////////////////////////////////////////////////////////////////
  // Return
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{}} screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: COLORS.darkgray, borderTopColor: COLORS.darkgray }, }}
        tabBarOptions={{
          style: {
            backgroundColor: "#b7142c",
            height: 80,
            paddingTop: 0,
            paddingBottom: 30,
            elevation: 0,
            activeTintColor: COLORS.primary,


          },

          showLabel: true,
          keyboardHidesTabBar: true,
          activeTintColor: COLORS.primary,
          inactiveTintColor: COLORS.secondary,
          color: COLORS.secondary,
        }}>

        <Tab.Screen
          name="Films"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="videocamera" size={21} color={color} />,
          }}
        />



        <Tab.Screen
          name="Profil"
          component={UserStack}
          options={{ tabBarIcon: ({ color, size }) => <Icon name="user" size={21} color={color} /> }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App;