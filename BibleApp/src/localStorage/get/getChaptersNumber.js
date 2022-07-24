import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getChaptersNumber = async () => {
  const [chapters, setChapters] = useState([]);
  const numberOfBibleBooks = 66;
  try {
    console.log('getChapterssNumber() called');
    for (let i = 0; i < numberOfBibleBooks; i++) {
      const chapter = await AsyncStorage.getItem(
        '@bibleChaptersNumber' + i.toString(),
      );
      setChapters(chapters => [...chapters, JSON.stringify(chapter)]);
    }
    return chapters;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getChaptersNumber;
