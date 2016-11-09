# <img src="https://www.teachok.com/logo.svg" width="80" align="left">&nbsp;react-stickers

> Create stickers that you can drag and drop with React.

## Usage

```
npm install react-stickers --save
```

```javascript
// require default component
import StickerPad from 'react-stickers';

// Pass an array of sticker objects to the react-stickers component
const stickers = [
    {img: 'https://www.teachok.com/logo.svg', x: 0, y: 0},
    {img: 'https://www.teachok.com/logo-dark.svg', x: 220, y: 220},
];

// Pass an optional options object to the react-stickers component
// Defaults shown:
const options = {
  useBoundary: true, // keep stickers inside the pad
  overflowHidden: true, // hide the edge of stickers when over edge
}

// Add react-stickers component to page
<StickerPad
    stickers={this.state.stickers}
    handleMoveSticker={Function}
/>
// ...
```
