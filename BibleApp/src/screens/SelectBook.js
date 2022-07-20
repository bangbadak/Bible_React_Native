import {number} from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import SelectChapter from './SelectChapter';

const SelectBook = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const numberOfBibleBook = 66;
  useEffect(() => {
    GetBooks();
  }, []);

  const GetBooks = async () => {
    try {
      const response = await fetch('https://bolls.life/get-books/NIV/');
      const json = await response.json();
      for (let i = 0; i < numberOfBibleBook; i++) {
        setBooks(books => [
          ...books,
          <Pressable
            style={styles.button}
            key={i}
            onPress={() =>
              navigation.navigate('SelectChapter', {
                bookName: json[i].name,
                length: json[i].chapters,
              })
            }>
            <Text style={{color: '#000000'}}>{json[i].name}</Text>
          </Pressable>,
        ]);
      }
      console.log('books: ' + books);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginLeft: 15}}>{books}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 30,
  },
});
export default SelectBook;
