import AsyncStorage from '@react-native-async-storage/async-storage';

const setChaptersNumber = async () => {
  const numberOfBibleBooks = 66;
  try {
    console.log('setChaptersNumber() called');
    const response = await fetch('https://bolls.life/get-books/NIV/');
    const json = await response.json();
    for (let i = 0; i < numberOfBibleBooks; i++) {
      await AsyncStorage.setItem(
        '@bibleChaptersNumber' + i.toString(),
        JSON.stringify(json[i].chapters),
      );
    }
  } catch (error) {
    console.log('error: ' + error);
  }
};

export default setChaptersNumber;
