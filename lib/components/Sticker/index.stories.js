'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).add('Sticker', function () {
  return _react2.default.createElement(_2.default, { img: 'http://www.unixstickers.com/image/data/stickers/gruntjs/Grunt.sh.png', size: (0, _addonKnobs.number)('Size', 200) });
});