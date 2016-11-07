import React from 'react';

export default ({img, options}) => (
  <img
    src={img}
    style={{
      display: 'inherit',
      maxWidth: options.stickerMaxSize || 'auto',
      maxHeight: options.stickerMaxSize || 'auto'
    }}
  />
);
