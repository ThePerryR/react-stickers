'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _Sticker = require('./Sticker');

var _Sticker2 = _interopRequireDefault(_Sticker);

var _itemTypes = require('../constants/itemTypes');

var _itemTypes2 = _interopRequireDefault(_itemTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickerDragLayer = function (_Component) {
  _inherits(StickerDragLayer, _Component);

  function StickerDragLayer() {
    _classCallCheck(this, StickerDragLayer);

    return _possibleConstructorReturn(this, (StickerDragLayer.__proto__ || Object.getPrototypeOf(StickerDragLayer)).apply(this, arguments));
  }

  _createClass(StickerDragLayer, [{
    key: 'renderItem',
    value: function renderItem(type, item) {
      if (type === _itemTypes2.default.STICKER) {
        return _react2.default.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: this.props.currentOffset.y,
              left: this.props.currentOffset.x
            } },
          _react2.default.createElement(_Sticker2.default, { img: item.img, options: item.options })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDragging = _props.isDragging,
          item = _props.item,
          itemType = _props.itemType,
          currentOffset = _props.currentOffset;

      if (!isDragging || !currentOffset) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 100,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          } },
        this.renderItem(itemType, item)
      );
    }
  }]);

  return StickerDragLayer;
}(_react.Component);

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

exports.default = (0, _reactDnd.DragLayer)(collect)(StickerDragLayer);