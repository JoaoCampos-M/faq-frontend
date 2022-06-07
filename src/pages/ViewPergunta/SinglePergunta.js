import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import './styles.css'
import Resposta from '../../components/Resposta'
import { Button } from '../../components/Button'
import { getQuestionById } from '../../services/questions'
import { getAnswerById } from '../../services/answers'
import { getAllUsers, searchUserById } from '../../services/users'

const SinglePergunta = () => {
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState([])
  const [autors, setAutors] = useState([])
  const { id } = useParams()
  useEffect(() => {
    async function init() {
      const resp = await getQuestionById(id)
      setQuestion(resp[0])

      const aux = await getAnswerById(resp[0].id)
      const users = await getAllUsers()
      setAutors(users)
      setAnswers(aux)
    }
    init()
  }, [])

  function getAutorName(id) {
    const user = searchUserById(id, autors)
    return user.nome
  }

  return (
    <div className="container">
      <Header />
      <p className="teste">{question?.texto}</p>
      <div className="listaResposta">
        {answers.map((item, index) => {
          return (
            <Resposta
              key={index}
              title={item.texto}
              autor={getAutorName(item.usuarioId) || ''}
            />
          )
        })}
      </div>

      <h1>Enviar uma resposta</h1>
      <textarea className="textarea"></textarea>
      <Button txt="Enviar" />
    </div>
  )
}

export default SinglePergunta
