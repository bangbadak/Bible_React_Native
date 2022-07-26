import React, {useEffect, useState} from 'react';
import {Pressable, Text, ScrollView, SafeAreaView} from 'react-native';
import isSaved from '../localStorage/is/isSaved';
import Clear from '../localStorage/Clear';
// import setBooks from '../localStorage/set/setBooks';
// import setChaptersNumber from '../localStorage/set/setChaptersNumber';
// import setChaptersText from '../localStorage/set/setChaptersText';

const IsDownloaded = ({navigation}) => {
  useEffect(() => {
    // isSaved();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Pressable
          title="Abc"
          onPress={() => navigation.navigate('SelectBook')}>
          <Text style={{fontSize: 50, color: '#000000'}}>abcde</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IsDownloaded;
