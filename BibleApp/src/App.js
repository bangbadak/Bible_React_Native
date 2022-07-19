import React, {useState, useEffect} from 'react';
import DisplayChapter from './DisplayChapter';
import NumericInput from 'react-native-numeric-input';

import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';

const App = () => {
  const [chapter, setChapter] = useState(1);
  const [verses, setVerses] = useState([]);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={headerStyle.input}
          keyboardType="numeric"
          placeholder="Input Num"
          onChangeText={text => {
            setChapter(parseInt(text));
          }}
        />
        <Button title="Select" onPress={setVerses(DisplayChapter(chapter))} />
      </View>

      <ScrollView style={headerStyle.text}>{verses}</ScrollView>
    </SafeAreaView>
  );
};

const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  text: {
    fontSize: 16,
    color: 'ffffff',
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
});

export default App;

// event => {
//   const {eventCount, target, text} = event.nativeEvent;
//   setChapter(text);
//   console.log(chapter);
// }
