import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pergunta from '../components/Pergunta'
import Header from '../components/Header'
import { getAllQuestions } from '../services/questions'

const Home = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    async
    const qt = getAllQuestions()
    setQuestions(qt)
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
              autor="João Pedro"
              func={() => navigate('/pergunta/Pergunta 01')}
            />
          )
        })}
        {/* <Pergunta
          title="Pergunta 01"
          autor="João Pedro"
          func={() => navigate('/pergunta/Pergunta 01')}
        />
        <Pergunta
          title="Pergunta 02"
          autor="João Pedro"
          func={() => navigate('/pergunta/Pergunta 02')}
        />
        <Pergunta
          title="Pergunta 03"
          autor="João Pedro"
          func={() => navigate('/pergunta/Pergunta 03')}
        /> */}
      </div>
    </div>
  )
}

export default Home
