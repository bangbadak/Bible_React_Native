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
    height: 50,
    // borderColor: '#000000',
    // borderWidth: 0.3,
    alignSelf: 'stretch',
  },
});

const SelectChapter = ({route, navigation}) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    // setButtons([]);
    for (let i = 1; i < route.params.length + 1; i++) {
      const stringTitle = i.toString();
      setButtons(buttons => [
        ...buttons,
        <Pressable
          style={styles.button}
          title={stringTitle}
          key={i}
          onPress={() =>
            navigation.navigate('DisplayChapter', {
              index: i,
              bookName: route.params.bookName,
              length: route.params.length,
            })
          }>
          <Text style={{color: '#000000'}}>{i}</Text>
        </Pressable>,
      ]);
    }
    console.log(buttons);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>{buttons}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SelectChapter;
