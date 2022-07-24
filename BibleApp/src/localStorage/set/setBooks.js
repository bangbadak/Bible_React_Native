import AsyncStorage from '@react-native-async-storage/async-storage';

const setBooks = async () => {
  const numberOfBibleBooks = 66;
  try {
    console.log('setBooks() called');
    const response = await fetch('https://bolls.life/get-books/NIV/');
    const json = await response.json();
    for (let i = 0; i < numberOfBibleBooks; i++) {
      await AsyncStorage.setItem(
        '@bibleBook' + i.toString(),
        JSON.stringify(json[i].name),
      );
      // const ret = await AsyncStorage.getItem('@bibleBook' + i.toString());
      // console.log('ret: ' + JSON.stringify(ret));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default setBooks;
