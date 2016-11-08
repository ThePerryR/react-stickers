import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import StickerDragLayer from './StickerDragLayer';
import Pad from './Pad';

const DEFAULT_OPTIONS = {
  overflowHidden: true,
  useBoundary: true
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

export default DragDropContext(HTML5Backend)(StickerPad);
