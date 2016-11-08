import React, {Component} from 'react';

export default class Sticker extends Component {
  render() {
    return (
      <img
        src={this.props.img}
        style={{
          display: 'inherit',
          maxWidth: this.props.options.stickerMaxSize || 'auto',
          maxHeight: this.props.options.stickerMaxSize || 'auto'
        }}
      />
    );
  }
}
