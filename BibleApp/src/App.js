import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView, Button, StyleSheeet} from 'react-native';
import GetChapter from './GetChapter';

const App = () => {
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    console.log('chapter: ' + chapter[0]);
  }, []);
  return (
    <ScrollView>
      {/* {chapter.map((text, id) => (
        <Text key={id}>{text}</Text>
      ))} */}
    </ScrollView>
  );
};

export default App;
