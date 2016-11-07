import React, {Component} from 'react';
import update from 'react-addons-update';

import StickerPad from '../../components/StickerPad';

const STICKERS = [
  {img: 'http://onespace.s3.amazonaws.com/wp-uploads/2015/11/icon-logo-round.svg', x: 0, y: 0},
  {img: 'http://onespace.s3.amazonaws.com/wp-uploads/2015/11/icon-logo-round.svg', x: 0, y: 0},
  {img: 'http://onespace.s3.amazonaws.com/wp-uploads/2015/11/icon-logo-round.svg', x: 0, y: 0},
  {img: 'http://onespace.s3.amazonaws.com/wp-uploads/2015/11/icon-logo-round.svg', x: 0, y: 0},
  {img: 'http://onespace.s3.amazonaws.com/wp-uploads/2015/11/icon-logo-round.svg', x: 0, y: 0}
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {stickers: STICKERS};
  }

  render() {
    const {stickers} = this.state;
    return (
      <div>
        <div style={{width: 320, height: 480, background: '#eaeaea', position: 'relative'}}>
          <StickerPad
            stickers={stickers}
            handleMoveSticker={(sticker, index) => {
              this.setState({stickers: update(stickers, {[index]: {$merge: sticker}})});
            }}
            options={{stickerMaxSize: 64}}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
