import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import filter from '../images/filter.png'
import sort from '../images/sort.png'
const Filter = ({navigation, routes}) => {
  return (
    <View style={styles.container}>
      <View style={{flex:1,borderRightWidth:0.3,borderColor:'#24A3B5', justifyContent: 'center',alignItems:'center',padding:16,flexDirection:'row'}}>
        <Image source={sort} style={{tintColor:"black",height:25,width:25}}/>
            <Text style={{marginHorizontal:10,fontSize:20,fontWeight:'bold'}}>Sort</Text>
      </View>
      <View style={{flex:1, justifyContent: 'center',alignItems:'center',padding:16,flexDirection:'row'}}>
        <Image source={filter}style={{tintColor:"black",height:20,width:20}} />
        <Text style={{marginHorizontal:10,fontSize:20,fontWeight:'bold'}}>Filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white',flexDirection:'row',elevation:5},
});
export default Filter;
