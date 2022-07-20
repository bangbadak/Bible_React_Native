import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';

const DisplayChapter = index => {
  console.log('DisplayChapter called');
  const [output, setOutput] = useState([]);

  console.log('output delcared');
  useEffect(() => {
    GetChapter();
  }, []);

  const GetChapter = async () => {
    try {
      const response = await fetch('https://bible-api.com/gen+' + index);
      const json = await response.json();
      for (var i = 0; i < json.verses.length; i++) {
        setOutput(arr => [...arr, i + 1 + '. ' + json.verses[i].text]);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return output.map((text, id) => <Text key={id}>{text}</Text>);
};

export default DisplayChapter;
