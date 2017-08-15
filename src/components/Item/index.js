import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sticker from '../Sticker'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({mounted: true})
    }, 0)
  }

  render () {
    const {item, currentOffset, size} = this.props
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            top: item.y + currentOffset.y,
            left: item.x + currentOffset.x,
            transform: `scale(${this.state.mounted ? 1.32 : 1}) rotate(${item.rotate || 0}deg)`,
            transition: 'transform 0.12s ease-in-out'
          }}>
          <Sticker img={item.img}/>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
}

export default Item
