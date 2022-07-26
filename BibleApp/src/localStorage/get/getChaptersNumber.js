import AsyncStorage from '@react-native-async-storage/async-storage';

const getChaptersNumber = async index => {
  try {
    const chapter = await AsyncStorage.getItem('@bibleChaptersNumber' + index);
    return chapter;
  } catch (error) {
    console.log(error);
  }
};

export default getChaptersNumber;
