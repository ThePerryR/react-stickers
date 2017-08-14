'use strict';

var _react = require('@storybook/react');

var req = require.context('../components', true, /.stories.js$/);
var loadStories = function loadStories() {
  return req.keys().forEach(function (filename) {
    return req(filename);
  });
};

(0, _react.configure)(loadStories, module);