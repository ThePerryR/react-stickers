import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import itemTypes from '../constants/itemTypes';
import Sticker from './Sticker';

const stickerSource = {
  beginDrag(props, _, component) {
    const stickerDOMNode = ReactDOM.findDOMNode(component);
    return {
      index: props.index,
      width: stickerDOMNode.offsetWidth,
      height: stickerDOMNode.offsetHeight,
      img: props.img,
      x: props.x,
      y: props.y,
      rotate: props.rotate,
      options: props.options,
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

class DraggableSticker extends Component {
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  handleClick(e) {
    if (e.shiftKey) {
      this.props.handleRotate(this.props.index);
    }
  }

  render() {
    const { isDragging, connectDragSource, x, y, rotate, img, options } = this.props;
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0 : 1,
          position: 'absolute',
          left: x,
          top: y,
          transform: `rotate(${rotate || 0}deg)`,
        }}
        onClick={::this.handleClick}>
        <Sticker img={img} options={options}/>
      </div>
    );
  }
}

DraggableSticker.propTypes = {
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  handleRotate: PropTypes.func.isRequired,
};
DraggableSticker.defaultProps = {
  x: 0,
  y: 0
};

export default DragSource(itemTypes.STICKER, stickerSource, collect)(DraggableSticker);
