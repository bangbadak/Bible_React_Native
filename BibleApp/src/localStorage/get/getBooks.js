import AsyncStorage from '@react-native-async-storage/async-storage';
//얘 hook 안 쓰고 실행시키던지 아니면 상위 코드 "setBook"의 book을 useState로 쓰지 말던지 둘 중 하나 해야됨
const getBooks = async () => {
  try {
    const res = await AsyncStorage.getItem('@bibleBook');
    if (res !== null) {
      console.log('res: ' + res);
      // setBookName(res);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getBooks;
