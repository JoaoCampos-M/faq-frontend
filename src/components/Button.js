import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ txt, ...rest }) => {
  return (
    <button {...rest} className="btn">
      {txt}
    </button>
  )
}

Button.propTypes = {
  txt: PropTypes.string,
  func: PropTypes.func
}

const Inserir = ({ txt, ...rest }) => {
  return (
    <button {...rest} className="btn">
      {txt}
    </button>
  )
}

Inserir.propTypes = {
  txt: PropTypes.string
}

export { Button, Inserir }
