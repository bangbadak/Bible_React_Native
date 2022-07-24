import React, {useEffect, useState} from 'react';
import {Pressable, Text, ScrollView, SafeAreaView} from 'react-native';
import getBooks from '../localStorage/get/getBooks';

const IsDownloaded = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          title="Abc"
          onPress={() =>
            navigation.navigate('SelectBook', {
              booksName: books,
            })
          }>
          <Text style={{fontSize: 50, color: '#000000'}}>abcde</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IsDownloaded;
