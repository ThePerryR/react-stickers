import {StyleSheet} from 'aphrodite';

import colors from './colors';

export default StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: 'auto'
  },
  input: {
    border: '1px solid #CCCCCC',
    borderRadius: 2,
    paddingLeft: 8,
    boxSizing: 'border-box',
    marginBottom: 16,
    height: 32,
    '-webkitAppearance': 'none',
    ':focus': {
      outline: 'none',
      border: `1px solid ${colors.highlight}`
    }
  },
  inputLarge: {
    height: 40
  },
  inputGood: {
    border: '1px solid #696969'
  },
  error: {
    background: '#ff8787',
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 8,
    borderRadius: 2,
    border: '1px solid #fa5252'
  },

  inline: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24
  },
  inlineLabel: {
    fontSize: 16,
    marginRight: 40,
    boxSizing: 'border-box',
    textAlign: 'right'
  },
  inlineInput: {
    border: '1px solid #CCCCCC',
    borderRadius: 2,
    paddingLeft: 8,
    boxSizing: 'border-box',
    height: 32,
    width: '100%',
    '-webkitAppearance': 'none',
    ':focus': {
      outline: 'none',
      border: `1px solid ${colors.highlight}`
    }
  }
});
