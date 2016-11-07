import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

import {brandon} from '../../styles/type';
import layout from '../../styles/layout';

class App extends Component {
  componentDidMount() {
    const classNames = document.getElementById('classNames').innerHTML;
    if (classNames) {
      StyleSheet.rehydrate();
    }
  }

  render() {
    return (
      <div className={css(styles.main, layout.main)}>
        {this.props.children}
      </div>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    fontFamily: [brandon, 'sans-serif'],
    fontSize: 13,
    lineHeight: '24px',
    color: '#3c3c3c',
    '-webkitFontSmoothing': 'antialiased',
    'MozMacOsxFontSmoothing': 'antialiased'
  }
});

export default App;
