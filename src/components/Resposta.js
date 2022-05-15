import React from 'react'
import PropTypes from 'prop-types'

const Resposta = props => {
  return (
    <div className="resposta">
      <h3>{props.title}</h3>
      <h5>{props.autor}</h5>
    </div>
  )
}

Resposta.propTypes = {
  title: PropTypes.string,
  autor: PropTypes.string
}

export default Resposta
