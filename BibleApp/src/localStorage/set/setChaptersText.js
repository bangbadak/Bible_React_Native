import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getBooks from '../get/getBooks';
import getChaptersNumber from '../get/getChaptersNumber';

const setChaptersText = async () => {
  const numberOfBibleBooks = 66;
  const bookName = getBooks();
  const numberOfChapters = getChaptersNumber();

  console.log('setChaptersText() called');

  for (let i = 0; i < numberOfBibleBooks; i++) {
    for (let j = 0; j < numberOfChapters[i]; j++) {
      try {
        const response = await fetch(
          'https://bible-api.com/' + bookName[i] + '+' + j + 1,
        );
        const json = await response.json();

        for (let k = 0; k < json.verses.length; k++) {
          await AsyncStorage.setItem(
            '@bible' + bookName[i] + j + ':' + k,
            JSON.stringify(json.verses[k].text),
          );
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};

export default setChaptersText;
