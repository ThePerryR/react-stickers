import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import PropTypes from 'prop-types'
import TouchBackend from 'react-dnd-touch-backend'

import StickerDragLayer from '../StickerDragLayer'
import Pad from '../Pad'

const DEFAULT_OPTIONS = {
  overflowHidden: true,
  useBoundary: true,
  handleRotate: () => {}
}

class StickerPad extends Component {
  render () {
    return (
      <div style={{width: '100%', height: '100%', position: 'absolute'}}>
        <Pad
          stickers={this.props.stickers}
          handleMoveSticker={this.props.handleMoveSticker}
          options={Object.assign({}, DEFAULT_OPTIONS, this.props.options)}
        />
        <StickerDragLayer/>
      </div>
    )
  }
}

StickerPad.propTypes = {
  stickers: PropTypes.array,
  options: PropTypes.shape({
    stickerMaxSize: PropTypes.number,
    overflowHidden: PropTypes.bool
  }),
  handleMoveSticker: PropTypes.func.isRequired
}
StickerPad.defaultProps = {
  stickers: []
}

export default DragDropContext(TouchBackend({enableMouseEvents: true}))(StickerPad)
