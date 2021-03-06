import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//얘 hook 안 쓰고 실행시키던지 아니면 상위 코드 "setBook"의 book을 useState로 쓰지 말던지 둘 중 하나 해야됨
const getBooks = async () => {
  const [books, setBooks] = useState([]);
  const numberOfBibleBooks = 66;
  try {
    console.log('getBooksName() called');
    for (let i = 0; i < numberOfBibleBooks; i++) {
      const name = await AsyncStorage.getItem('@bibleBook' + i.toString());
      setBooks(books => [...books, JSON.stringify(name)]);
    }
    return books;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getBooks;
