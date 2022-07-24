import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayChapter = ({route}) => {
  const [output, setOutput] = useState([]);
  const {index, bookName, length} = route.params;
  useEffect(() => {
    GetChapter();
  }, []);

  const GetChapter = async () => {
    try {
      const response = await fetch(
        'https://bible-api.com/' + bookName + '+' + index,
      );
      console.log('bookName, index: ' + bookName + ',' + index);
      const json = await response.json();
      console.log('length: ' + json.verses.length);

      for (var i = 0; i < json.verses.length; i++) {
        console.log('type: ' + typeof json.verses[i].text);
        setOutput(arr => [...arr, i + 1 + '. ' + json.verses[i].text]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <Text style={{color: '#000000', fontSize: 20}}>{output}</Text>
    </ScrollView>
  );
};

export default DisplayChapter;
