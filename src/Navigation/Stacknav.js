import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../screens/products';
import Cart from '../screens/cart';
const Stack = createStackNavigator();

const MainStack = ({navigation, routes}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Products}
        name="Products"
        options={{headerShown: false}}
      />
      <Stack.Screen
      component={Cart}
      name="Cart" 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
