'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _itemTypes = require('../constants/itemTypes');

var _itemTypes2 = _interopRequireDefault(_itemTypes);

var _Sticker = require('./Sticker');

var _Sticker2 = _interopRequireDefault(_Sticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stickerSource = {
  beginDrag: function beginDrag(props, _, component) {
    var stickerDOMNode = _reactDom2.default.findDOMNode(component);
    return {
      index: props.index,
      width: stickerDOMNode.offsetWidth,
      height: stickerDOMNode.offsetHeight,
      img: props.img,
      x: props.x,
      y: props.y,
      rotate: props.rotate,
      options: props.options
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

var DraggableSticker = function (_Component) {
  _inherits(DraggableSticker, _Component);

  function DraggableSticker() {
    _classCallCheck(this, DraggableSticker);

    return _possibleConstructorReturn(this, (DraggableSticker.__proto__ || Object.getPrototypeOf(DraggableSticker)).apply(this, arguments));
  }

  _createClass(DraggableSticker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
        captureDraggingState: true
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (e.shiftKey) {
        this.props.handleRotate(this.props.index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource,
          x = _props.x,
          y = _props.y,
          rotate = _props.rotate,
          img = _props.img,
          options = _props.options;

      return connectDragSource(_react2.default.createElement(
        'div',
        {
          style: {
            opacity: isDragging ? 0 : 1,
            position: 'absolute',
            left: x,
            top: y,
            transform: 'rotate(' + (rotate || 0) + 'deg)'
          },
          onClick: this.handleClick.bind(this) },
        _react2.default.createElement(_Sticker2.default, { img: img, options: options })
      ));
    }
  }]);

  return DraggableSticker;
}(_react.Component);

DraggableSticker.propTypes = {
  img: _react.PropTypes.string.isRequired,
  x: _react.PropTypes.number.isRequired,
  y: _react.PropTypes.number.isRequired,
  handleRotate: _react.PropTypes.func.isRequired
};
DraggableSticker.defaultProps = {
  x: 0,
  y: 0
};

exports.default = (0, _reactDnd.DragSource)(_itemTypes2.default.STICKER, stickerSource, collect)(DraggableSticker);