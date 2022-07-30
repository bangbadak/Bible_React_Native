import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';

import setBooks from '../localStorage/set/setBooks';
import setChaptersNumber from '../localStorage/set/setChaptersNumber';
import setChaptersText from '../localStorage/set/setChaptersText';
=======


>>>>>>> 8c62871

const SelectBook = ({navigation}) => {
  // const [result, setResult] = useState([]);
  const result = [];
  const [bookName, setBookName] = useState('');
  // const [temp, setTemp] = useState([]);
  // const temp = [];
  const numberOfBibleBook = 66;

  useEffect(() => {
    console.log('SelectBook called');
    // MakeArr();

    for (let i = 0; i < numberOfBibleBook; i++) {
      let name = Promise.resolve(getJson(i));
      name.then(value => {
        setBookName(value);
      });
      // console.log('name type: ' + );
      // abcd(i);

      console.log('bookName[i]: ' + bookName);
      result.push(
        <Pressable
          style={styles.button}
          title={bookName}
          key={i}
          onPress={() =>
            navigation.navigate('SelectChapter', {
              bookName: bookName,
              // length: numberOfChapters,
            })
          }>
          <Text style={{color: '#000000'}}>{bookName}</Text>
        </Pressable>,
      );
    }
  }, []);
  const abcd = async index => {
    let abc = getJson(index).then(value => {
      // setBookName(value);
      return value;
    });
  };
  const getJson = async index => {
    try {
      const ret = [];
      const response = await fetch('https://bolls.life/get-books/NIV/');
      const json = await response.json();
      console.log('bible name: ' + json[index].name);
      return json[index].name;
      // setTemp(temp => [...temp, json[i].name]);
    } catch (error) {
      console.log(error);
    }
  };

  const storeBooks = async (index, value) => {
    try {
      console.log('index, value: ' + index + ',' + value);
      await AsyncStorage.setItem('@bibleBook' + index, value);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooks = async index => {
    try {
      const res = await AsyncStorage.getItem('@bibleBook' + index);
      if (res !== null) {
        return res;
      }
<<<<<<< HEAD
    } catch (error) {
      console.log(error);
=======
    } catch (e) {
      console.error(e);
>>>>>>> 8c62871
    }
  };


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={{marginLeft: 15}}>{result}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    marginTop: 10,
  },
});
export default SelectBook;
