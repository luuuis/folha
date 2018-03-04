import React from 'react';
import {WebView} from 'react-native';
import {overrideCSS} from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.nissanleafpt.com'}}
        style={{flex: 1, marginTop: 20}}
        injectedJavaScript={`(${addGlobalStyle})('${overrideCSS}')`}
        userAgent={'Folha'}
      />
    );
  }
}

const addGlobalStyle = `function (css) {
  var head = document.getElementsByTagName('head')[0];
  if (head) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
}`;
