import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorites = ({navigation}) => {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    getAllKeys();
  }, [keys]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          title="delete all"
          onPress={() => {
            deleteAllKeys();
          }}>
          <Text style={{color: '#000000'}}>delete all</Text>
        </Pressable>
      ),
    });
  }, []);
  const deleteAllKeys = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllKeys = async () => {
    try {
      const temp = await AsyncStorage.getAllKeys();
      setKeys(temp);
    } catch (e) {
      console.log(error);
    }
  };

  return keys.length != 0 ? (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
      }}>
      <ScrollView>
        {keys.map((key, index) => (
          <View
            style={{
              width: 350,
              height: 50,
              borderWidth: 0.3,
              borderRadius: 9,
              justifyContent: 'center',
              marginTop: 10,
            }}
            key={index}>
            <Pressable
              onPress={() => {
                navigation.navigate('DisplayFavorite', {
                  index: key.charAt(key.length - 1),
                  bookName: key.slice(1, -1),
                  length: key.length - 1,
                });
              }}>
              <Text style={{color: '#000000'}}>
                {'  ' + key.slice(1, -1) + ' ' + key.charAt(key.length - 1)}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>set favorite first</Text>
    </SafeAreaView>
  );
};

export default Favorites;
