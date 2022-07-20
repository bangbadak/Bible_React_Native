import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
      const json = await response.json();

      for (var i = 0; i < length; i++) {
        setOutput(arr => [...arr, i + 1 + '. ' + json.verses[i].text]);
      }
    } catch (e) {
      ß;
      console.error(e);
    }
  };

  // const GetNumberOfChapter = async () => {
  //   try {
  //     const response = await fetch('https://bolls.life/get-books/NIV/');
  //     const json = await response.json();
  //     console.log('bookName: ' + bookName);
  //     for (var i = 0; i < 66; i++) {
  //       if ((json[i].name = bookName)) {
  //         console.log('chapters: ' + json[i].chapters);
  //         return json[i].chapters;
  //       }
  //     }
  //   } catch (e) {f
  //     console.error(e);
  //   }
  // };
  return (
    <ScrollView>
      <Text style={{color: '#000000'}}>{output}</Text>
    </ScrollView>
  );
};

export default DisplayChapter;
