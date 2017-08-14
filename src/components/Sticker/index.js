import React from 'react'
import PropTypes from 'prop-types'

const Sticker = ({img, size}) => <img src={img} style={{display: 'inherit', maxWidth: size, maxHeight: size}}/>

Sticker.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Sticker.defaultProps = {
  size: 'auto'
}

export default Sticker
