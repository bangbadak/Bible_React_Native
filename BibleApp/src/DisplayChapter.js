import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';
import GetChapter from './GetChapter';

const DisplayChapter = () => {
  const [output, setOutput] = useState([]);
  useEffect(() => {
    GetChapter();
  }, []);

  const GetChapter = async () => {
    try {
      const response = await fetch('https://bible-api.com/gen+1');
      const json = await response.json();
      for (var i = 0; i < json.verses.length; i++) {
        setOutput(arr => [...arr, i + 1 + '절: ' + json.verses[i].text]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView>
      {output.map((text, id) => (
        <Text key={id}>{text}</Text>
      ))}
    </ScrollView>
  );
};

export default DisplayChapter;
