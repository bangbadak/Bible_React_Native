import AsyncStorage from '@react-native-async-storage/async-storage';

const isSaved = async () => {
  try {
    const isSaved = await AsyncStorage.getItem('@isSaved');
    if (isSaved != null) {
      console.log('isSaved true, start displaying bible.');
      return true;
    } else if (isSaved == null) {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default isSaved;
