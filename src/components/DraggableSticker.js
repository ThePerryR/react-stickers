import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {DragSource} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

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

class DraggableSticker extends Component {
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const {isDragging, connectDragSource, x, y, img, options} = this.props;
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0 : 1,
          position: 'absolute',
          left: x,
          top: y
        }}>
        <Sticker img={img} options={options}/>
      </div>
    );
  }
}

DraggableSticker.propTypes = {
  img: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};
DraggableSticker.defaultProps = {
  x: 0,
  y: 0
};

export default DragSource(itemTypes.STICKER, stickerSource, collect)(DraggableSticker);
