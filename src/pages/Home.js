import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pergunta from '../components/Pergunta'
import Header from '../components/Header'
import { getAllQuestions } from '../services/questions'
import { getAllUsers, getUserName, searchUserById } from '../services/users'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [autors, setAutors] = useState([])
  useEffect(() => {
    const loadData = async () => {
      setAutors(await getAllUsers())
      setQuestions(await getAllQuestions())
    }
    loadData()
  }, [])

  const navigate = useNavigate()
  return (
    <div className="container">
      <Header />
      <h1>Lista de Perguntas</h1>
      <div className="listaPergunta">
        {questions.map((item, index) => {
          return (
            <Pergunta
              key={index}
              title={item.texto}
              autor={getUserName(searchUserById(item.usuarioId, autors))}
              func={() => navigate('/pergunta/1')}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
