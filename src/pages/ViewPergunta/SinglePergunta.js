import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import './styles.css'
import Resposta from '../../components/Resposta'
import { Button } from '../../components/Button'
import { getQuestionById } from '../../services/questions'
import { getAnswerById, postAnswer } from '../../services/answers'
import { getAllUsers, searchUserById } from '../../services/users'

const SinglePergunta = () => {
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState([])
  const [autors, setAutors] = useState([])
  const { id } = useParams()

  async function init() {
    const resp = await getQuestionById(id)
    setQuestion(resp[0])

    const aux = await getAnswerById(resp[0].id)
    const users = await getAllUsers()
    setAutors(users)
    setAnswers(aux)
  }
  useEffect(() => {
    init()
  }, [])

  function getAutorName(id) {
    const user = searchUserById(id, autors)
    return user.nome
  }

  const sendAnswer = async e => {
    e.preventDefault()
    const data = { perguntaId: id, texto: e.target[0].value }
    const response = await postAnswer(data)
    e.target[0].value = ''
    console.log(response)
    init()
  }

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
              autor={getAutorName(item.usuarioId) || 'desconhecido'}
            />
          )
        })}
      </div>
      <form style={styles} onSubmit={sendAnswer}>
        <h1>Enviar uma resposta</h1>
        <textarea className="textarea"></textarea>
        <Button txt="Enviar" />
      </form>
    </div>
  )
}

export default SinglePergunta
