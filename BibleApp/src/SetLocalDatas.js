import React, {useEffect, useState, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetLocalDatas = () => {
  const [books, setBooks] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [result, setResult] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const numberOfBibleBook = 66;

  console.log('SetLocalDatas called');

  // setIsSaved(isDataSaved());
  console.log('isSaved: ' + isSaved);
  GetBooks();
  console.log('books[i].length: ' + books[0][0]);
  for (let i = 0; i < numberOfBibleBook; i++) {
    for (let j = 0; j < books[i].length; j++) {
      storeData(books[i].name, j, getChapter(books[i].name, j));
    }
  }
  for (let i = 0; i < numberOfBibleBook; i++) {
    for (let j = 0; j < books[i].length; j++) {
      setResult(result, [
        ...result,
        getData(books[i].name, j, getChapter(books[i].name, j)),
      ]);
    }
  }

  const isDataSaved = async () => {
    try {
      const isSave = await AsyncStorage.getItem('@isSaved');
      if (isSaved == false || isSave == null) {
        await AsyncStorage.setItem('@isSaved', true);
      }
      if (isSave == null) isSave = false;
      return isSave;
    } catch (e) {
      console.error(e);
    }
  };

  const GetBooks = async () => {
    console.log('GetBooks called');
    try {
      const response = await fetch('https://bolls.life/get-books/NIV/');
      const json = await response.json();
      for (let i = 0; i < numberOfBibleBook; i++) {
        setBooks(books => [
          ...books,
          {name: json[i].name, length: json[i].chapters},
        ]);
        console.log('books[i].name: ' + books[i].name);
        // setBooks(books => [
        //   ...books,
        //   <Pressable
        //     style={styles.button}
        //     key={i}
        //     onPress={() =>
        //       navigation.navigate('SelectChapter', {
        //         bookName: json[i].name,
        //         length: json[i].chapters,
        //       })
        //     }>
        //     <Text style={{color: '#000000'}}>{json[i].name}</Text>
        //   </Pressable>,
        // ]);
      }
      return books;
    } catch (e) {
      console.error(e);
    }
  };

  const getChapter = (bookName, index) => async () => {
    try {
      const response = await fetch(
        'https://bible-api.com/' + bookName + '+' + index,
      );
      console.log('bookName, index: ' + bookName + ',' + index);
      const json = await response.json();
      console.log('length: ' + json.verses.length);

      for (var i = 0; i < json.verses.length; i++) {
        console.log('type: ' + typeof json.verses[i].text);
        setChapter(arr => [...arr, i + 1 + '. ' + json.verses[i].text]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const storeData = (bookName, chapterNum, value) => async () => {
    try {
      await AsyncStorage.setItem('@' + bookName + chapterNum, value);
    } catch (e) {
      console.error(e);
    }
  };
  const getData = (bookName, chapterNum, value) => async () => {
    try {
      const res = await AsyncStorage.getItem(
        '@' + bookName + chapterNum + value,
      );
      if (res !== null) {
        console.log('value: ' + res);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return result;
};

export default SetLocalDatas;
