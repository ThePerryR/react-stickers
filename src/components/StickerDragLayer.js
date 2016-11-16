import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

import Sticker from './Sticker';
import itemTypes from '../constants/itemTypes';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 0);
  }

  render() {
    const { item, currentOffset } = this.props;
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            top: item.y + currentOffset.y,
            left: item.x + currentOffset.x,
            transform: `scale(${this.state.mounted ? 1.32 : 1}) rotate(${item.rotate || 0}deg)`,
            transition: 'transform 0.12s ease-in-out',
          }}>
          <Sticker img={item.img} options={item.options}/>
        </div>
      </div>
    );
  }
}

class StickerDragLayer extends Component {
  renderItem(type, item) {
    if (type === itemTypes.STICKER) {
      return (
        <Item item={item} currentOffset={this.props.currentOffset}/>
      );
    }
  }

  render() {
    const { isDragging, item, itemType, currentOffset } = this.props;
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
