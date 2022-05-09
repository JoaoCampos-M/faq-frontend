import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pergunta from '../components/Pergunta'
import Header from '../components/Header'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <Header />
      <h1>Lista de Perguntas</h1>
      <div className="listaPergunta">
        <Pergunta
          title="Pergunta 01"
          autor="João Pedro"
          func={() => navigate('/pergunta/01')}
        />
        <Pergunta
          title="Pergunta 02"
          autor="João Pedro"
          func={() => navigate('/pergunta/02')}
        />
        <Pergunta
          title="Pergunta 03"
          autor="João Pedro"
          func={() => navigate('/pergunta/03')}
        />
      </div>
    </div>
  )
}

export default Home
