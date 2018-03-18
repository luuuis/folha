import React from 'react';
import {BackHandler, WebView} from 'react-native';
import {overrideCSS} from "./styles";

export default class App extends React.Component {
  onNavigationStateChange = (navState) => {
    this.canGoBack = navState.canGoBack
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.webView && this.canGoBack) {
        this.webView.goBack()
        return true
      }
    })
  }

  render() {
    return (
      <WebView
        ref={ref => this.webView = ref}
        source={{uri: 'https://www.nissanleafpt.com'}}
        style={{flex: 1, marginTop: 25}}
        injectedJavaScript={`(${addGlobalStyle})('${overrideCSS}')`}
        onNavigationStateChange={this.onNavigationStateChange}
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
