import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <button onClick={() => props.func()} className="btn">
      {props.txt}
    </button>
  )
}

Button.propTypes = {
  txt: PropTypes.string,
  func: PropTypes.func
}

export default Button
