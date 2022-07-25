import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import getBooks from '../localStorage/get/getBooks';
import getChaptersNumber from '../localStorage/get/getChaptersNumber';
import setBooks from '../localStorage/set/setBooks';
import setChaptersNumber from '../localStorage/set/setChaptersNumber';

const SelectBook = ({navigation}) => {
  const [result, setResult] = useState([]);
  const [numberOfChapters, setNumberOfChapters] = useState([]); //이거 없애야됨
  const numberOfBibleBook = 66;
  useEffect(() => {
    setBooks();
    setChaptersNumber();
    setNumberOfChapters(getChaptersNumber()); // 수정

    for (let i = 0; i < numberOfBibleBook; i++) {
      const bookName = JSON.stringify(getBooks(i));
      console.log('bookName: ' + bookName);
      setResult(result => [
        ...result,
        <Pressable
          style={styles.button}
          title={bookName}
          key={i}
          onPress={() =>
            navigation.navigate('SelectChapter', {
              bookName: bookName,
              length: numberOfChapters[i],
            })
          }>
          <Text style={{color: '#000000'}}>{bookName}</Text>
        </Pressable>,
      ]);
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={{marginLeft: 15}}>{result}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    marginTop: 10,
  },
});
export default SelectBook;
