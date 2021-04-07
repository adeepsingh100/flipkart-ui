import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import back from '../images/back.png';
import heart from '../images/heart.png';
import cartimg from '../images/cart.png';
import mic from '../images/mic.png';
import search from '../images/search.png';
import {useNavigation} from '@react-navigation/native';

const Cart = ({route}) => {
  const navigation = useNavigation();
  const data = route.params?.item;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          backgroundColor: '#047BD5',
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={back}
              style={{tintColor: 'white', marginVertical: 7}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 30, color: 'white'}}>
            Cart
          </Text>
        </View>
      </View>
      <View>
        <Text>{data.productName}</Text>
        <Text>{data.Type}</Text>
        <Image source={{uri: data.image}} style={{height: 20, width: 20}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Cart;
