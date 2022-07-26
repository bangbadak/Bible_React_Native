import AsyncStorage from '@react-native-async-storage/async-storage';

const getChaptersText = async (bookName, chapterNumber, verseNumber) => {
  console.log('getBooksText() called');

  try {
    const result = await AsyncStorage.getItem(
      '@bible' +
        bookName +
        '+' +
        chapterNumber.toString() +
        ':' +
        verseNumber.toString(),
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getChaptersText;
