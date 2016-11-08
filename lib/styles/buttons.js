'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _aphrodite = require('aphrodite');

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = {
  display: 'inline-block',
  background: _colors2.default.primary,
  color: 'white',
  cursor: 'pointer',
  transition: 'box-shadow 150ms cubic-bezier(0,0,.2,1), background 0.2s ease',
  textDecoration: 'none',
  border: 'none',
  '-webkitAppearance': 'none',
  ':focus': {
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 255, 67, 0.32)'
  },
  ':hover': {
    boxShadow: '0 0 3px rgba(0,0,0,0.08),0 3px 6px rgba(0,0,0,0.16)',
    transition: 'box-shadow 150ms cubic-bezier(0,0,.2,1)'
  }
};

exports.default = _aphrodite.StyleSheet.create({
  large: _extends({}, button, {
    alignSelf: 'center',
    fontSize: 16,
    height: 40,
    lineHeight: '36px',
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 4
  }),
  small: _extends({}, button, {
    fontSize: 12,
    lineHeight: '24px',
    height: 24,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 2
  }),
  text: {
    textDecoration: 'none',
    fontSize: 12,
    cursor: 'pointer',
    color: _colors2.default.dark,
    ':focus': {
      outline: 'none'
    },
    ':hover': {
      color: 'black'
    }
  },
  disabled: {
    background: '#D8D8D8'
  }
});