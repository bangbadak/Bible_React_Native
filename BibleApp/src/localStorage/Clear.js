import AsyncStorage from '@react-native-async-storage/async-storage';
const Clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export default Clear;
