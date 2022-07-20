import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DisplayChapter from './DisplayChapterExample';

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
  // const [chapter, setChapter] = useState(1);
  // const [verses, setVerses] = useState([]);

  // return (
  //   <SafeAreaView>
  //     <View>
  //       <Pressable />
  //     </View>

  //     <ScrollView style={headerStyle.text}>{verses}</ScrollView>
  //   </SafeAreaView>
  // );

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
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
