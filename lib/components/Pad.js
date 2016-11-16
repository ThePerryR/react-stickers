'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDnd = require('react-dnd');

var _itemTypes = require('../constants/itemTypes');

var _itemTypes2 = _interopRequireDefault(_itemTypes);

var _DraggableSticker = require('./DraggableSticker');

var _DraggableSticker2 = _interopRequireDefault(_DraggableSticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var padTarget = {
  drop: function drop(props, monitor, component) {
    var move = monitor.getDifferenceFromInitialOffset();
    var stickerItem = monitor.getItem();
    var previousSticker = props.stickers[stickerItem.index];
    var sticker = Object.assign({}, previousSticker);
    var pad = _reactDom2.default.findDOMNode(component);
    sticker.x += move.x;
    sticker.y += move.y;
    if (props.options.useBoundary) {
      if (sticker.x < 0) {
        sticker.x = 0;
      }
      if (sticker.y < 0) {
        sticker.y = 0;
      }
      if (sticker.x + stickerItem.width > pad.clientWidth) {
        sticker.x = pad.offsetWidth - stickerItem.width;
      }
      if (sticker.y + stickerItem.height > pad.clientHeight) {
        sticker.y = pad.offsetHeight - stickerItem.height;
      }
    }
    props.handleMoveSticker(sticker, stickerItem.index, previousSticker);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var Pad = function (_Component) {
  _inherits(Pad, _Component);

  function Pad() {
    _classCallCheck(this, Pad);

    return _possibleConstructorReturn(this, (Pad.__proto__ || Object.getPrototypeOf(Pad)).apply(this, arguments));
  }

  _createClass(Pad, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDropTarget = _props.connectDropTarget,
          stickers = _props.stickers,
          isOver = _props.isOver,
          options = _props.options;

      var styles = options.styles || {};
      return connectDropTarget(_react2.default.createElement(
        'div',
        {
          style: Object.assign(_extends({
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            overflow: options.overflowHidden ? 'hidden' : 'visible'
          }, styles), isOver ? options.hoverStyles : {}) },
        stickers.map(function (sticker, i) {
          return _react2.default.createElement(_DraggableSticker2.default, _extends({
            handleRotate: options.handleRotate,
            key: i,
            index: i,
            options: options
          }, sticker));
        })
      ));
    }
  }]);

  return Pad;
}(_react.Component);

Pad.propTypes = {
  isOver: _react.PropTypes.bool.isRequired,
  stickers: _react.PropTypes.array.isRequired,
  stickerMaxSize: _react.PropTypes.number,
  handleMoveSticker: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactDnd.DropTarget)(_itemTypes2.default.STICKER, padTarget, collect)(Pad);