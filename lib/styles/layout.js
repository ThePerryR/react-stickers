'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aphrodite = require('aphrodite');

exports.default = _aphrodite.StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
    minHeight: '100%',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column'
  },

  card: {
    padding: 32,
    boxSizing: 'border-box',
    width: 640,
    background: 'white'
  }
});