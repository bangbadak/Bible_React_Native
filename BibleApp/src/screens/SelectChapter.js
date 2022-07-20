import {string} from 'prop-types';
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SelectChapter = ({navigation}) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    for (let i = 1; i < 50; i++) {
      const stringTitle = i.toString();

      setButtons(buttons => [...buttons, stringTitle]);
      //   <Button
      //     style={styles.button}
      //     title={stringTitle}
      //     key={i}
      //     onPress={() => navigation.navigate('DisplayChapter', {index: i})}
      //   />,
    }
    console.log(buttons);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
      }}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            width: 40,
          }}>
          {buttons.map((item, index) => (
            <Pressable
              key={index}
              title={item}
              style={{
                height: 130,
                width: 130,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPressOut={() => {
                navigation.navigate('DisplayChapter', {index: item});
              }}>
              <Text style={{color: '#000000'}}>{item}</Text>
            </Pressable>
          ))}
          {/* <Button
          title="go to the screen"
          onPress={() => {
            navigation.navigate('DisplayChapter', {index: 1});
          }}
        /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SelectChapter;
