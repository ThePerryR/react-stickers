import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { DropTarget } from 'react-dnd';

import itemTypes from '../constants/itemTypes';
import DraggableSticker from './DraggableSticker';


const padTarget = {
  drop(props, monitor, component) {
    const move = monitor.getDifferenceFromInitialOffset();
    const stickerItem = monitor.getItem();
    const previousSticker = props.stickers[stickerItem.index];
    const sticker = Object.assign({}, previousSticker);
    const pad = ReactDOM.findDOMNode(component);
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

class Pad extends Component {
  render() {
    const { connectDropTarget, stickers, isOver, options } = this.props;
    const styles = options.styles || {};
    return connectDropTarget(
      <div
        style={Object.assign(
          {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            overflow: options.overflowHidden ? 'hidden' : 'visible',
            ...styles
          },
          isOver ? options.hoverStyles : {}
        )}>
        {stickers.map((sticker, i) => (
          <DraggableSticker
            handleRotate={options.handleRotate}
            key={i}
            index={i}
            options={options}
            {...sticker}
          />
        ))}
      </div>
    );
  }
}

Pad.propTypes = {
  isOver: PropTypes.bool.isRequired,
  stickers: PropTypes.array.isRequired,
  stickerMaxSize: PropTypes.number,
  handleMoveSticker: PropTypes.func.isRequired
};

export default DropTarget(itemTypes.STICKER, padTarget, collect)(Pad);
