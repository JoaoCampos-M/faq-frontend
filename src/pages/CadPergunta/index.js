import React from 'react'
import Header from '../../components/Header'
import './styles.css'

const CadPergunta = () => {
  return (
    <div className="container">
      <Header />
      <h1>Cadastrar Pergunta</h1>

      <form className="form">
        <h3 className="title">Titulo</h3>
        <input className="input1"></input>
        <h3 className="title">Palavra chave</h3>
        <input></input>
        <h3 className="title">Descricão</h3>
        <textarea className="textarea"></textarea>
        <button className="button">Enviar</button>
      </form>
    </div>
  )
}

export default CadPergunta
