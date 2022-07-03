import React, { useState } from 'react'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'

import { postQuestion } from '../../services/questions'
import { getCurrentUser } from '../../services/users'
import './styles.css'

const CadPergunta = () => {
  const [palavraChave, setpalavraChave] = useState('')
  const [texto, settexto] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()

    const { id } = getCurrentUser()
    const data = {
      usuarioId: id,
      palavrasChave: palavraChave,
      texto
    }
    const { status } = await postQuestion(data)
    if (status === 201) {
      navigate(`${process.env.PUBLIC_URL}/inicio`)
    }
  }

  function alteraPalavra(evento) {
    setpalavraChave(evento.target.value)
  }
  function alterarTexto(evento) {
    settexto(evento.target.value)
  }

  return (
    <div className="container">
      <Header />
      <h1>Cadastrar Pergunta</h1>

      <form className="form" onSubmit={handleSubmit}>
        <h3 className="title">Palavra chave</h3>
        <input onChange={alteraPalavra} value={palavraChave} />
        <h3 className="title">Descricão</h3>
        <textarea
          className="textarea"
          onChange={alterarTexto}
          value={texto}
        ></textarea>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default CadPergunta
