import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getBooks from './get/getBooks';
import getChaptersNumber from './getChaptersNumber';

const setChaptersText = async () => {
  const [data, setData] = useState([]);
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

        for (let k = 0; k < json.verses.length; k++)
          setData(data => [...data, k + 1 + '.' + json.verses[k].text]);

        await AsyncStorage.setItem(
          '@bible' + bookName[i] + j.toString(),
          JSON.stringify(data),
        );
        console.log('data: ' + JSON.stringify(data));

        // const res = await AsyncStorage.getItem(
        //   '@bible' + bookName[i] + j.toString(),
        // );
        // console.log('res: ' + JSON.stringify(res));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};

export default setChaptersText;
