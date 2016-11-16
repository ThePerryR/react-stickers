'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _reactDndTouchBackend = require('react-dnd-touch-backend');

var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);

var _StickerDragLayer = require('./StickerDragLayer');

var _StickerDragLayer2 = _interopRequireDefault(_StickerDragLayer);

var _Pad = require('./Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_OPTIONS = {
  overflowHidden: true,
  useBoundary: true,
  handleRotate: function handleRotate() {}
};

var StickerPad = function (_Component) {
  _inherits(StickerPad, _Component);

  function StickerPad() {
    _classCallCheck(this, StickerPad);

    return _possibleConstructorReturn(this, (StickerPad.__proto__ || Object.getPrototypeOf(StickerPad)).apply(this, arguments));
  }

  _createClass(StickerPad, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%', position: 'absolute' } },
        _react2.default.createElement(_Pad2.default, _extends({}, this.props, { options: Object.assign({}, DEFAULT_OPTIONS, this.props.options) })),
        _react2.default.createElement(_StickerDragLayer2.default, null)
      );
    }
  }]);

  return StickerPad;
}(_react.Component);

StickerPad.propTypes = {
  stickers: _react.PropTypes.array,
  options: _react.PropTypes.shape({
    stickerMaxSize: _react.PropTypes.number,
    overflowHidden: _react.PropTypes.bool
  })
};
StickerPad.defaultProps = {
  stickers: []
};

exports.default = (0, _reactDnd.DragDropContext)((0, _reactDndTouchBackend2.default)({ enableMouseEvents: true }))(StickerPad);