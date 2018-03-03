import React from 'react';
import {WebView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.nissanleafpt.com'}}
        style={{flex: 1, marginTop: 20}}
        injectedJavaScript={`(${addGlobalStyle})('${userStyles}')`}
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

const userStyles = `
body#phpbb {
    padding: 0;
}

#site-description {
    width: 100%;
}

#site-description #logo img {
    width: 100%;
    height: auto;
}

div#wrap {
    min-width: 0;
    padding: 2px;
}

.topiclist .row dt {
    width: 100%;
}

#site-description>:not(a), /* all except logo */
.navbar>.inner>:not(.navlinks), /* all except breadcrumbs */
.navbar>.inner>.navlinks .rightside, /* hide widgets next to breadcrumbs */
.topiclist dl>:not(dt), /* all except name */
#search-box,
#page-footer {
    display: none;
}
`;
