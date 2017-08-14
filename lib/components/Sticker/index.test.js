'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stickerSrc = 'http://www.unixstickers.com/image/data/stickers/gruntjs/Grunt.sh.png';

test('Displays the image provided', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { img: stickerSrc }));
  expect(wrapper.find('img[src="' + stickerSrc + '"]')).toHaveLength(1);
});