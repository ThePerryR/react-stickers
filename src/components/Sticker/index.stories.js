import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Sticker from './'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('Sticker', () => (
    <Sticker img="http://www.unixstickers.com/image/data/stickers/gruntjs/Grunt.sh.png" size={number('Size', 200)}/>
  ))
