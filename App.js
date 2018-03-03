import React from 'react';
import {WebView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.nissanleafpt.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}
