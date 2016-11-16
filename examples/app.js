import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

import StickerPad from '../lib/components/StickerPad';

const STICKERS = [
  { img: 'https://www.teachok.com/stickers/logo-red.svg', x: 0, y: 0, rotate: -20, },
  { img: 'https://www.teachok.com/stickers/logo-grey.svg', x: 0, y: 0, rotate: 20, }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stickers: STICKERS };
  }

  render() {
    const { stickers } = this.state;
    return (
      <div>
        <div style={{ width: 200, height: 200 }}/>
        <div style={{ width: 320, height: 480, background: '#eaeaea', position: 'relative' }}>
          <StickerPad
            stickers={stickers}
            handleMoveSticker={(sticker, index) => {
              this.setState({ stickers: update(stickers, { [index]: { $merge: sticker } }) });
            }}
            options={{
              stickerMaxSize: 64,
              handleRotate: (index) => {
                console.log(index);
                this.setState({ stickers: update(stickers, { [index]: { $merge: { rotate: stickers[index].rotate + 10 } } }) });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));