'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sticker = function Sticker(_ref) {
  var img = _ref.img,
      size = _ref.size;
  return _react2.default.createElement('img', { src: img, style: { display: 'inherit', maxWidth: size, maxHeight: size } });
};

Sticker.propTypes = {
  img: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sticker.defaultProps = {
  size: 'auto'
};

exports.default = Sticker;