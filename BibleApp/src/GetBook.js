import React from 'react';
const GetBook = async () => {
  try {
    const response = await fetch('https://bible-api.com/gen+1:1');
    const json = await response.json();
    console.log('json.reference: ' + json.reference);
    console.log('json.text: ' + json.text);
    return json.text;
  } catch (e) {
    console.error(e);
  }
};
export default GetBook;
