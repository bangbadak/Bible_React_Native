import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Setting = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    GetMySQL();
  });
  const GetMySQL = async () => {
    try {
      const response = await fetch('http://localhost:4548/books');
      const data = await response.json();
      console.log('name: ' + data[0].title);
      setData(data[0].title);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView>
      <Text>{data}</Text>
    </SafeAreaView>
  );
};

export default Setting;
