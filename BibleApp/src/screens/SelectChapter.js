import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#45E2F5',
  },
});

const SelectChapter = ({navigation}) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    setButtons([]);
    for (let i = 1; i < 51; i++) {
      const stringTitle = i.toString();
      setButtons(buttons => [
        ...buttons,
        <Pressable
          style={styles.button}
          title={stringTitle}
          key={i}
          onPress={() => navigation.navigate('DisplayChapter', {index: i})}>
          <Text style={{color: '#000000'}}>{i}</Text>
        </Pressable>,
      ]);
    }
    console.log(buttons);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>{buttons}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SelectChapter;
