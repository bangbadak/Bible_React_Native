import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheeet,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const DisplayChapter = ({navigation, route}) => {
  const [output, setOutput] = useState([]);
  const {index, bookName} = route.params;
  const [isMark, setIsMark] = useState(false);
  const [icon, setIcon] = useState(false);

  const full = route.params.bookName + route.params.index;
  useEffect(() => {
    GetChapter();
  }, []);

  useLayoutEffect(() => {
    isStored(full);
    navigation.setOptions({
      headerRight: () =>
        icon ? (
          <Pressable
            onPress={() => {
              deleteFavorite(route.params.bookName + route.params.index);
              setIcon(false);
            }}>
            <Ionicons name={'bookmark'} size={20} color={'#000'} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              storeFavorite(route.params.bookName + route.params.index);
              setIcon(true);
            }}>
            <Ionicons name={'bookmark-outline'} size={20} color={'#000'} />
          </Pressable>
        ),
    });
  }, [icon]);

  const isStored = async address => {
    try {
      const temp = await AsyncStorage.getItem('@' + address);
      console.log('address: ' + address);
      if (temp == null) {
        console.log('temp is null');
        setIcon(false);
      } else {
        console.log('temp is not null');
        setIcon(true);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const storeFavorite = async address => {
    try {
      await AsyncStorage.setItem('@' + address, address);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteFavorite = async address => {
    try {
      await AsyncStorage.removeItem('@' + address);
    } catch (error) {
      console.log(error);
    }
  };

  const GetChapter = async () => {
    try {
      const response = await fetch(
        'https://bible-api.com/' + bookName + '+' + index,
      );
      const json = await response.json();
      for (var i = 0; i < json.verses.length; i++) {
        if (i % 5 == 0)
          setOutput(arr => [
            ...arr,
            '\n' + '    ' + (i + 1) + '. ' + json.verses[i].text,
          ]);
        else setOutput(arr => [...arr, i + 1 + '. ' + json.verses[i].text]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <View style={{marginHorizontal: 20, backgroundColor: '#ffffff'}}>
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            fontFamily: 'Arial',
          }}>
          {output}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DisplayChapter;
