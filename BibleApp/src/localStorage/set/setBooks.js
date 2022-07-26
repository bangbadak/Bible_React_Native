import AsyncStorage from '@react-native-async-storage/async-storage';
const setBooks = async () => {
  const numberOfBibleBooks = 66;
  try {
    var res = [];
    const response = await fetch('https://bolls.life/get-books/NIV/');
    const json = await response.json();
    for (let i = 0; i < numberOfBibleBooks; i++) res.push(json[i].name);

    await AsyncStorage.setItem('@bibleBook', JSON.stringify(res));
  } catch (error) {
    console.log(error);
  }
};

export default setBooks;
