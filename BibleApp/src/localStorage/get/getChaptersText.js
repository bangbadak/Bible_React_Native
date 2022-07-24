import AsyncStorage from '@react-native-async-storage/async-storage';

const getChaptersText = (bookName, chapterNumber) => async () => {
  console.log('getBooksText() called');

  try {
    const result = await AsyncStorage.getItem(
      '@bible' + bookName + chapterNumber.toString(),
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getChaptersText;
