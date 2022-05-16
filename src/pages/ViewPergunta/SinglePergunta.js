import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import './styles.css'
import Resposta from '../../components/Resposta'
import Button from '../../components/Button'

const SinglePergunta = () => {
  const { id } = useParams()
  return (
    <div className="container">
      <Header />
      <h1>{id}</h1>
      <p className="teste">
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsumom
      </p>
      <div className="listaResposta">
        <Resposta title="hoje é dia 32" autor="amanteigado" />
        <Resposta title="hoje é dia 04" autor="luander gameplays" />
        <Resposta title="onde eu peço uma pizza por aqui?" autor="calabresa" />
      </div>

      <h1>Enviar uma resposta</h1>
      <textarea className="textarea">asdasd</textarea>
      <Button txt="Enviar" />
    </div>
  )
}

export default SinglePergunta
