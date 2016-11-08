import React, {Component} from 'react';
import {DragLayer} from 'react-dnd';

import Sticker from './Sticker';
import itemTypes from '../constants/itemTypes';

class StickerDragLayer extends Component {
  renderItem(type, item) {
    if (type === itemTypes.STICKER) {
      return (
        <div
          style={{
            position: 'absolute',
            top: item.y + this.props.currentOffset.y,
            left: item.x + this.props.currentOffset.x
          }}>
          <Sticker img={item.img} options={item.options}/>
        </div>
      );
    }
  }

  render() {
    const {isDragging, item, itemType, currentOffset} = this.props;
    if (!isDragging || !currentOffset) {
      return null;
    }
    return (
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          zIndex: 100,
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}>
        {this.renderItem(itemType, item)}
      </div>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getDifferenceFromInitialOffset(),
    isDragging: monitor.isDragging()
  };
}

export default DragLayer(collect)(StickerDragLayer);
