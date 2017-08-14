import React from 'react'
import { mount } from 'enzyme'

import Sticker from './'

const stickerSrc = 'http://www.unixstickers.com/image/data/stickers/gruntjs/Grunt.sh.png'

test('Displays the image provided', () => {
  const wrapper = mount(<Sticker img={stickerSrc}/>)
  expect(wrapper.find(`img[src="${stickerSrc}"]`)).toHaveLength(1)
})
