import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import data from '../data/data';
import heart from '../images/heart.png';
import star from '../images/star.png';
import {useNavigation} from '@react-navigation/native';
const BodyView = ({routes}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        key={'H'}
        data={data.data}
        keyExtractor={data => data.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              borderLeftWidth: 0.2,
              borderTopWidth: 0.2,
              borderColor: 'black',
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart', {item: item})}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {item.ad ? (
                  <Text
                    style={{
                      backgroundColor: '#e8e8e8',
                      color: 'white',
                      padding: 5,
                      height: 30,
                    }}>
                    {item.ad}
                  </Text>
                ) : (
                  <View />
                )}
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 100,
                    elevation: 2,
                    padding: 7,
                    margin: 10,
                  }}>
                  <Image
                    source={heart}
                    style={{height: 30, width: 30, tintColor: 'grey'}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: 12, overflow: 'hidden'}}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 300,
                    width: 200,
                    resizeMode: 'center',
                    overflow: 'hidden',
                  }}
                />
                <Text style={{padding: 2}}>{item.productName}</Text>
                <Text numberOfLines={1} style={{padding: 2}}>
                  {item.Type}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 12,
                  padding: 5,
                }}>
                <Text>{item.dPrice}</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    marginRight: 5,
                    marginLeft: 5,
                    color: '#99bcbd',
                  }}>
                  {item.oPrice}
                </Text>
                <Text style={{color: '#009c03'}}>{item.Offer}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 12,
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 20,
                    height: 25,
                    width: 60,
                    backgroundColor: '#009c03',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>{item.RatingStar}</Text>
                  <Image source={star} style={{height: 20, width: 20}} />
                </View>
                <Text style={{paddingHorizontal: 8, paddingVertical: 2}}>
                  ({item.RatingNumber})
                </Text>
                <Image
                  source={{
                    uri: 'https://www.adgully.com/img/800/68264_fl.png.jpg',
                  }}
                  style={{
                    height: 25,
                    width: 60,
                    resizeMode: 'center',
                    padding: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default BodyView;
