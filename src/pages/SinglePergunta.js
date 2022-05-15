import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Resposta from '../components/Resposta'

const SinglePergunta = () => {
  const { id } = useParams()
  return (
    <div className="container">
      <Header />
      <h1>{id}?</h1>
      <div className="listaResposta">
        <Resposta title="hoje é dia 32" autor="amanteigado" />
        <Resposta title="hoje é dia 04" autor="luander gameplays" />
        <Resposta title="onde eu peço uma pizza por aqui?" autor="calabresa" />
      </div>
    </div>
  )
}

export default SinglePergunta
