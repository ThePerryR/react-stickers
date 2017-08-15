import React from 'react'
import { storiesOf } from '@storybook/react'

import Item from './'

const stickerSrc = 'http://www.unixstickers.com/image/data/stickers/gruntjs/Grunt.sh.png'

storiesOf('components', module)
  .add('Item', () => (
    <div style={{position: 'relative'}}>
      <Item
        item={{
          x: 20,
          y: 20,
          rotate: 0,
          img: stickerSrc
        }}
        currentOffset={{x: 0, y: 0}}
      />
    </div>
  ))
