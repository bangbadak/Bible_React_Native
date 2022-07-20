import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const DisplayChapter = ({route}) => {
  const [output, setOutput] = useState([]);
  const index = route.params.index;
  useEffect(() => {
    GetChapter();
  }, []);

  const GetChapter = async () => {
    try {
      setOutput([]);
      const response = await fetch('https://bible-api.com/gen+' + index);
      const json = await response.json();
      for (var i = 0; i < json.verses.length; i++) {
        setOutput(arr => [...arr, i + 1 + '. ' + json.verses[i].text]);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ScrollView>
      <Text style={{color: '#000000'}}>{output}</Text>
    </ScrollView>
  );
};

export default DisplayChapter;
