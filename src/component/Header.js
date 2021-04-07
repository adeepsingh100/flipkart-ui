import React, { useState,useEffect } from 'react';
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native';
import back from '../images/back.png'
import heart from '../images/heart.png'
import cart from '../images/cart.png'
import mic from '../images/mic.png'
import search from '../images/search.png'
import { useNavigation } from '@react-navigation/native';
const Header=({routes})=> {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between',padding:16}}>
                <View style={{alignItems:"center", flexDirection:'row'}}>
                 <TouchableOpacity>   
                <Image source={back} style={{tintColor:"white",marginVertical:7}}/>
                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:30, color:'white'}}>Shoes</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:"center"}}>
                <Image source={search} style={{height:25,width:25,marginHorizontal:10,tintColor:"white"}} />
                <Image source={mic}  style={{height:25,width:25,marginHorizontal:10}}/>
                <Image source={heart} style={{height:25,width:25,marginHorizontal:10}} />
                <Image source={cart} style={{height:25,width:25,marginHorizontal:10}} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {backgroundColor:'#047BD5'}
})
export default Header

