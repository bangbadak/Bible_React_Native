import React, {useEffect, useState, useRef} from 'react';
import {Text, View, ScrollView} from 'react-native';

const App = () => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    Get();
  }, []);
  // const DisplayVerses = length => {
  //   const result = [];
  //   for (let i = 0; i < length; i++) {
  //     result.push(<Text key={i}>{i + 1 + '절: ' + output[i]}</Text>);
  //   }

  //   return result;
  // };

  const Get = async () => {
    try {
      const response = await fetch('https://bible-api.com/gen+1');
      const json = await response.json();
      for (var i = 0; i < 31; i++) {
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

export default App;
