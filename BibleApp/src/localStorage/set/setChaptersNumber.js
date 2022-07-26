import AsyncStorage from '@react-native-async-storage/async-storage';

const setChaptersNumber = async () => {
  const numberOfBibleBooks = 66;
  try {
    console.log('setChaptersNumber() called');
    const response = await fetch('https://bolls.life/get-books/NIV/');
    const json = await response.json();
    for (let i = 0; i < numberOfBibleBooks; i++) {
      await AsyncStorage.setItem(
        '@bibleChaptersNumber' + i,
        JSON.stringify(json[i].chapters),
      );
      // const res = await AsyncStorage.getItem(
      //   '@bibleChaptersNumber' + i.toString(),
      // );
      // console.log('bibleChapterNumber[i]: ' + res);
    }
  } catch (error) {
    console.log('error: ' + error);
  }
};

export default setChaptersNumber;
