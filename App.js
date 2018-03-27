import React from 'react'
import {BackHandler, Linking, WebView} from 'react-native'
import {overrideCSS} from "./styles"

const baseURL = 'https://www.nissanleafpt.com'

export default class App extends React.Component {
  onNavigationStateChange = (event) => {
    if (event.loading === true) {
      if (event.url.startsWith(baseURL)) {
        this.canGoBack = event.canGoBack
      } else {
        this.webView.stopLoading()
        Linking.openURL(event.url)
      }
    }
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
        source={{uri: baseURL}}
        style={{flex: 1, marginTop: 25}}
        injectedJavaScript={`(${addGlobalStyle})('${overrideCSS}')`}
        onNavigationStateChange={this.onNavigationStateChange}
        userAgent={'Folha'}
      />
    )
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
}`
