import AsyncStorage from '@react-native-async-storage/async-storage';
import setBooks from '../set/setBooks';
import setChaptersNumber from '../set/setChaptersNumber';
import setChaptersText from '../set/setChaptersText';
const isSaved = async () => {
  try {
    // const isSave = await AsyncStorage.getItem('@isSaved');
    // if (isSave != null || isSave == 'true') {
    //   console.log('isSaved true, start displaying bible.');
    //   return true;
    // } else {
    console.log('isSaved false, start download datas');
    await AsyncStorage.setItem('@isSaved', 'true');
    setBooks();
    setChaptersNumber();
    setChaptersText();
    return false;
    // }
  } catch (error) {
    console.log(error);
  }
};

export default isSaved;
