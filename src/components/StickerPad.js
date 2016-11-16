import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

import StickerDragLayer from './StickerDragLayer';
import Pad from './Pad';

const DEFAULT_OPTIONS = {
  overflowHidden: true,
  useBoundary: true,
  handleRotate: () => {},
};

class StickerPad extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Pad {...this.props} options={Object.assign({}, DEFAULT_OPTIONS, this.props.options)}/>
        <StickerDragLayer />
      </div>
    );
  }
}

StickerPad.propTypes = {
  stickers: PropTypes.array,
  options: PropTypes.shape({
    stickerMaxSize: PropTypes.number,
    overflowHidden: PropTypes.bool
  })
};
StickerPad.defaultProps = {
  stickers: []
};

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(StickerPad);
