import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';
import getChaptersText from '../localStorage/get/getChaptersText';

const DisplayChapter = async ({route}) => {
  useEffect(() => {
    setOutput(getChaptersText(bookName, index));
  }, []);
  const [output, setOutput] = useState([]);
  const {index, bookName} = route.params;

  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <Text style={{color: '#000000', fontSize: 20}}>{output}</Text>
    </ScrollView>
  );
};

export default DisplayChapter;
