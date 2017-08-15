import React, { Component } from 'react'
import { DragLayer } from 'react-dnd'
import PropTypes from 'prop-types'

import Sticker from '../Sticker'

/*
 * StickerDragLayer
 * This component makes the Sticker component draggable
 */
class StickerDragLayer extends Component {
  render () {
    const {isDragging, item, currentOffset} = this.props
    if (!isDragging || !currentOffset) {
      return null
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
        <div>
          <div
            style={{
              position: 'absolute',
              top: item.y + currentOffset.y,
              left: item.x + currentOffset.x,
              transform: `rotate(${item.rotate || 0}deg)`,
              transition: 'transform 0.12s ease-in-out'
            }}>
            <Sticker img={item.img}/>
          </div>
        </div>
      </div>
    )
  }
}

StickerDragLayer.propTypes = {
  // props from react-dnd
  item: PropTypes.object.isRequired,
  currentOffset: PropTypes.object.isRequired,
  isDragging: PropTypes.bool.isRequired
}

// collect injects these values as props into this component
function collect (monitor) {
  return {
    item: monitor.getItem(), // Currently dragged item
    currentOffset: monitor.getDifferenceFromInitialOffset(), // Distance from starting drag point
    isDragging: monitor.isDragging()
  }
}

// Using a DragLayer lets us perform custom rendering of the drag preview.
export default DragLayer(collect)(StickerDragLayer)
