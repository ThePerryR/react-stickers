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

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {
      mounted: false
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ mounted: true });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          currentOffset = _props.currentOffset;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: item.y + currentOffset.y,
              left: item.x + currentOffset.x,
              transform: 'scale(' + (this.state.mounted ? 1.32 : 1) + ') rotate(' + (item.rotate || 0) + 'deg)',
              transition: 'transform 0.12s ease-in-out'
            } },
          _react2.default.createElement(_Sticker2.default, { img: item.img, options: item.options })
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

var StickerDragLayer = function (_Component2) {
  _inherits(StickerDragLayer, _Component2);

  function StickerDragLayer() {
    _classCallCheck(this, StickerDragLayer);

    return _possibleConstructorReturn(this, (StickerDragLayer.__proto__ || Object.getPrototypeOf(StickerDragLayer)).apply(this, arguments));
  }

  _createClass(StickerDragLayer, [{
    key: 'renderItem',
    value: function renderItem(type, item) {
      if (type === _itemTypes2.default.STICKER) {
        return _react2.default.createElement(Item, { item: item, currentOffset: this.props.currentOffset });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isDragging = _props2.isDragging,
          item = _props2.item,
          itemType = _props2.itemType,
          currentOffset = _props2.currentOffset;

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
    currentOffset: monitor.getDifferenceFromInitialOffset(),
    isDragging: monitor.isDragging()
  };
}

exports.default = (0, _reactDnd.DragLayer)(collect)(StickerDragLayer);