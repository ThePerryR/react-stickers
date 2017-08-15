import React from 'react'
import { storiesOf } from '@storybook/react'

import StickerPad from './'

storiesOf('components', module)
  .add('StickerPad', () => (
    <StickerPad
      handleMoveSticker={(data) => console.log(data)}
    />
  ))
