import React from 'react'
import PropTypes from 'prop-types'

const Pergunta = props => {
  return (
    <div className="pergunta" onClick={() => props.func()}>
      <h2>{props.title}</h2>
      <p>Autor: {props.autor}</p>
    </div>
  )
}

Pergunta.propTypes = {
  title: PropTypes.string,
  autor: PropTypes.string,
  func: PropTypes.func
}

export default Pergunta
