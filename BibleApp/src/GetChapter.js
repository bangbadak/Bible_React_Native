import React, {useState} from 'react';

const GetChapter = async () => {
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState([]);
  try {
    const response = await fetch('https://bible-api.com/gen+1');
    const json = await response.json();
    for (var i = 0; i < json.verses.length; i++) {
      setOutput(arr => [...arr, i + 1 + '절: ' + json.verses[i].text]);
    }
    setResult(output);
  } catch (e) {
    console.error(e);
  }
  // console.log('result: ' + result);
  return result;
};
export default GetChapter;
