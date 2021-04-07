import React, { useState,useEffect } from 'react';
import {View,StyleSheet} from 'react-native';
import Header from '../component/Header';
import Filter from '../component/Filter';
import BodyView from '../component/BodyView';
const Products=({navigation,routes})=> {
    return (
        <View style={styles.container}>
            <Header />
            <Filter />
            <BodyView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex : 1,backgroundColor:'white'}
})
export default Products